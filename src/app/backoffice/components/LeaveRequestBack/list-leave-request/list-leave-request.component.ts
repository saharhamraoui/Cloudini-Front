import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { User } from 'src/app/model/User';
import { LeaveRequestService } from 'src/app/services/LeaveRequest/leave-request.service';
Chart.register(...registerables);

@Component({
  selector: 'app-list-leave-request',
  templateUrl: './list-leave-request.component.html',
  styleUrls: ['./list-leave-request.component.css']
})
export class ListLeaveRequestComponent implements OnInit {
  leaveRequests: any[] = [];
  filteredLeaveRequests: any[] = [];
  doctorEmail: string = '';
  curRole!: string;
  searchStatus: string = '';
  currentPage = 1;
  itemsPerPage = 5;
  selectedRequest: any = null;
  Math = Math;
  showOnlyApproved: boolean = true;

  currentUser: User = {
    idUser: 1,
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'saaharhamraoui@gmail.com',
    password: '',
    role:"ADMIN",
    phoneNumber: '1234567890',
    address: '123 Main St',
  };


  //stats 
  // Add these properties to your component
leaveStatusData = {
  approved: 0,
  pending: 0,
  rejected: 0
};

monthlyLeaveData: { month: string, count: number }[] = [];
assistantActivityData: { assistant: string, leaves: number }[] = [];

  constructor(
    private leaveService: LeaveRequestService,
    private router: Router
  ) {}

  // Add this to your component class
get pendingRequestsCount(): number {
  return this.leaveRequests.filter(request => request.status === 'Pending').length;
}
  

  assistantsAvailable: number = 5;
workloadLevel: string = 'low';

calculateWorkload(request: any): void {
  const totalAssistants = 10; // Replace with actual count
  const overlappingRequests = this.leaveRequests.filter(lr => 
    lr.status === 'Approuvé' &&
    lr.id !== request.id &&
    this.datesOverlap(request.startDate, request.endDate, lr.startDate, lr.endDate)
  );
  
  const uniqueAssistantsOnLeave = new Set(
    overlappingRequests.map(req => req.assistantEmail)
  ).size;
  
  this.assistantsAvailable = totalAssistants - uniqueAssistantsOnLeave;
  
  const availabilityRatio = this.assistantsAvailable / totalAssistants;
  if (availabilityRatio > 0.7) this.workloadLevel = 'low';
  else if (availabilityRatio > 0.4) this.workloadLevel = 'medium';
  else this.workloadLevel = 'high';
}

getWorkloadPercentage(request:any): number {
  const impact = this.calculateWorkloadImpact(request);
  return (this.assistantsAvailable / 10) * 100; // 10 = total assistants
}

  showHeatmap: boolean = true;
heatmapDays: any[] = [];
heatmapLegend = [
  { color: '#ebedf0', label: '0' },
  { color: '#c6e48b', label: '1-2' },
  { color: '#7bc96f', label: '3-4' },
  { color: '#239a3b', label: '5+' }
];

generateHeatmap(): void {
  const heatmapData: {[key: string]: number} = {};
  
  // Count requests per day
  this.leaveRequests.forEach(request => {
    const start = new Date(request.startDate);
    const end = new Date(request.endDate);
    const current = new Date(start);
    
    while (current <= end) {
      const dateStr = current.toISOString().split('T')[0];
      heatmapData[dateStr] = (heatmapData[dateStr] || 0) + 1;
      current.setDate(current.getDate() + 1);
    }
  });
  
  // Generate last 30 days heatmap
  this.heatmapDays = [];
  const today = new Date();
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    this.heatmapDays.push({
      date,
      count: heatmapData[dateStr] || 0
    });
  }
}

getHeatmapColor(count: number): string {
  if (count === 0) return '#ebedf0';
  if (count <= 2) return '#c6e48b';
  if (count <= 4) return '#7bc96f';
  return '#239a3b';
}

  ngOnInit(): void {
    this.doctorEmail = sessionStorage.getItem('loggedUser') || '';
    this.curRole =this.currentUser.role!;
    this.loadLeaveRequests();
    this.initCalendar();  }

    // Calendar properties
    currentDate: Date = new Date();
    currentMonth!: number;
    currentYear!: number;
    calendarDays: any[] = [];
    weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  
    selectedLeaveRequest: any = null;
  popupPosition: any = { top: '0', left: '0' };

  // Add these new methods
  getInitials(email: string): string {
    return email.split('@')[0].substring(0, 2).toUpperCase();
  }

  //smart suggest
  hasOverlap(request: any): boolean {
    const requestStart = new Date(request.startDate);
    const requestEnd = new Date(request.endDate);
    
    return this.leaveRequests.some(lr => 
      lr.status === 'Approved' &&
      lr.id !== request.id &&
      this.datesOverlap(
        requestStart, 
        requestEnd,
        new Date(lr.startDate), 
        new Date(lr.endDate)
      )
    );
  }
  
  hasLowLeaveCount(request: any): boolean {
    const recentLeaves = this.leaveRequests.filter(lr => 
      lr.assistantEmail === request.assistantEmail && 
      lr.status === 'Approved' &&
      this.isRecentLeave(lr.endDate)
    ).length;
    
    return recentLeaves < 3;
  }
  
  getWorkloadLevel(request: any): string {
    return this.calculateWorkloadImpact(request).level;
  }
  
  getAvailableAssistants(request: any): number {
    return this.calculateWorkloadImpact(request).available;
  }
  // Update the status checks to match your template
calculateSuggestedApprovals(): void {
  this.suggestedApprovals = this.leaveRequests.filter(request => 
    request.status === 'Pending' && this.shouldSuggestApproval(request)
  );
}

shouldSuggestApproval(request: any): boolean {
  // Convert dates to Date objects if they're strings
  const requestStart = new Date(request.startDate);
  const requestEnd = new Date(request.endDate);
  
  // Criteria 1: Doesn't overlap with existing approved leaves
  const hasOverlap = this.leaveRequests.some(lr => 
    lr.status === 'Approved' &&
    lr.id !== request.id &&
    this.datesOverlap(requestStart, requestEnd, new Date(lr.startDate), new Date(lr.endDate))
  );
  
  // Criteria 2: Assistant hasn't taken many leaves recently
  const assistantLeaves = this.leaveRequests.filter(lr => 
    lr.assistantEmail === request.assistantEmail && 
    lr.status === 'Approved' &&
    this.isRecentLeave(lr.endDate)
  ).length;
  
  // Criteria 3: Not during peak period (optional)
  const isPeakPeriod = this.isPeakPeriod(requestStart);
  
  return !hasOverlap && assistantLeaves < 3 && !isPeakPeriod;
}
  showLeaveDetails(request: any, event: MouseEvent): void {
    this.selectedLeaveRequest = request;
    
    // Position the popup near the clicked element
    this.popupPosition = {
      top: (event.clientY - 50) + 'px',
      left: (event.clientX + 20) + 'px'
    };
    
    // Prevent event bubbling
    event.stopPropagation();
  }

  calculateWorkloadImpact(request: any): { level: string, available: number } {
    const totalAssistants = 10; // Adjust based on your actual data
    const overlappingRequests = this.leaveRequests.filter(lr => 
      lr.status === 'Approved' &&
      lr.id !== request.id &&
      this.datesOverlap(
        new Date(request.startDate), 
        new Date(request.endDate),
        new Date(lr.startDate), 
        new Date(lr.endDate)
      )
    );
    
    const uniqueAssistantsOnLeave = new Set(
      overlappingRequests.map(req => req.assistantEmail)
    ).size;
    
    const assistantsAvailable = totalAssistants - uniqueAssistantsOnLeave;
    
    const availabilityRatio = assistantsAvailable / totalAssistants;
    let level = 'high';
    if (availabilityRatio > 0.7) level = 'low';
    else if (availabilityRatio > 0.4) level = 'medium';
    
    return { level, available: assistantsAvailable };
  }
  //end smart suggestion

// Add this property to your component
recentlyApprovedIds: number[] = [];



updateStatus(requestId: number, newStatus: string): void {
  this.leaveService.updateLeaveRequestStatus(requestId, newStatus).subscribe(
    () => {
      // Update the request status in the main list
      const request = this.leaveRequests.find(r => r.id === requestId);
      if (request) {
        request.status = newStatus;
      }

      // Remove from suggested approvals if approved
      if (newStatus === 'Approuvé') {
        this.suggestedApprovals = this.suggestedApprovals.filter(
          req => req.id !== requestId
        );

        this.recentlyApprovedIds.push(requestId);
        setTimeout(() => {
          this.recentlyApprovedIds = this.recentlyApprovedIds.filter(id => id !== requestId);
        }, 3000);
      }

      // Refresh the views
      this.onSearchStatus();
      this.generateCalendar();
    },
    error => {
      console.error('Error updating leave request status:', error);
    }
  );
}
  
    // Add these new methods
    toggleApprovedFilter(): void {
      this.showOnlyApproved = !this.showOnlyApproved;
      this.generateCalendar();
    }
  
    initCalendar(): void {
      this.currentMonth = this.currentDate.getMonth();
      this.currentYear = this.currentDate.getFullYear();
      this.generateCalendar();
    }
  
    get currentMonthName(): string {
      return new Date(this.currentYear, this.currentMonth, 1).toLocaleString('fr-FR', { month: 'long' });
    }


  
    changeMonth(offset: number): void {
      this.currentMonth += offset;
      
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }
      
      this.generateCalendar();
    }
  
    generateCalendar(): void {
      this.calendarDays = [];
      const firstDay = new Date(this.currentYear, this.currentMonth, 1);
      const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
      const startingDay = firstDay.getDay();
      
      // Previous month days
      const prevMonthLastDay = new Date(this.currentYear, this.currentMonth, 0).getDate();
      for (let i = startingDay - 1; i >= 0; i--) {
        const date = new Date(this.currentYear, this.currentMonth - 1, prevMonthLastDay - i);
        this.addCalendarDay(date, false);
      }
      
      // Current month days
      const today = new Date();
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(this.currentYear, this.currentMonth, i);
        this.addCalendarDay(date, true, this.isSameDay(date, today));
      }
      
      // Next month days
      const daysToAdd = 42 - this.calendarDays.length;
      for (let i = 1; i <= daysToAdd; i++) {
        const date = new Date(this.currentYear, this.currentMonth + 1, i);
        this.addCalendarDay(date, false);
      }
    }
  
    addCalendarDay(date: Date, isCurrentMonth: boolean, isToday: boolean = false): void {
      const leaveRequests = this.getLeaveRequestsForDate(date);
      this.calendarDays.push({
        date,
        isCurrentMonth,
        isToday,
        hasLeave: leaveRequests.length > 0,
        leaveRequests
      });
    }
  
    getLeaveRequestsForDate(date: Date): any[] {
      return this.filteredLeaveRequests.filter(request => {
        // Filter by approval status if enabled
        if (this.showOnlyApproved && request.status !== 'Approuvé') return false;
        
        const startDate = new Date(request.startDate);
        const endDate = new Date(request.endDate);
        return date >= startDate && date <= endDate;
      });
    }
  
    isSameDay(date1: Date, date2: Date): boolean {
      return date1.getFullYear() === date2.getFullYear() &&
             date1.getMonth() === date2.getMonth() &&
             date1.getDate() === date2.getDate();
    }
  
    getStatusColor(status: string): string {
      switch(status) {
        case 'Approuvé': return '#4CAF50'; // Green
        case 'Rejeté': return '#F44336';   // Red
        case 'En attente': return '#FFC107'; // Yellow
        default: return '#9E9E9E';         // Grey
      }
    }
  

  

  loadLeaveRequests(): void {
    this.leaveService.getAllLeaveRequests().subscribe((requests) => {
      this.leaveRequests = requests;
      this.filteredLeaveRequests = [...requests];
      this.calculateChartData(); // Add this line
      this.generateCalendar();
      this.initCharts(); // Initialize charts after data is ready    });
  });
}

  onSearchStatus(): void {
    const searchTerm = this.searchStatus.toLowerCase();
    this.filteredLeaveRequests = this.leaveRequests.filter(request =>
      request.status.toLowerCase().includes(searchTerm)
    );
    this.currentPage = 1;
  }

  resetFilters(): void {
    this.searchStatus = '';
    this.filteredLeaveRequests = [...this.leaveRequests];
    this.currentPage = 1;
  }

 // Add this with your other component properties
peakPeriods: Date[] = [
  // Add your actual peak periods (e.g., holidays, busy seasons)
  new Date('2023-12-20'), // Example: Winter holiday
  new Date('2023-07-01'), // Example: Summer holiday
  // Add more as needed
];

// Add this method to your component class
isPeakPeriod(date: Date): boolean {
  // Check if date falls within any peak period
  return this.peakPeriods.some(peakDate => {
    // Compare month and day (ignore year)
    return date.getMonth() === peakDate.getMonth() && 
           date.getDate() === peakDate.getDate();
  });
}


// Smart suggestions properties
showSmartSuggestions: boolean = false;
suggestedApprovals: any[] = [];

// Toggle smart suggestions visibility
toggleSmartSuggestions(): void {
  this.showSmartSuggestions = !this.showSmartSuggestions;
  if (this.showSmartSuggestions) {
    this.calculateSuggestedApprovals();
  }
}



// Add this to your component class
isSuggestedForApproval(request: any): boolean {
  return this.suggestedApprovals.some(suggested => suggested.id === request.id);
}




// Add this method to your component class
datesOverlap(start1: string | Date, end1: string | Date, start2: string | Date, end2: string | Date): boolean {
  // Convert to Date objects if they're strings
  const s1 = new Date(start1);
  const e1 = new Date(end1);
  const s2 = new Date(start2);
  const e2 = new Date(end2);
  
  // Check if the date ranges overlap
  return s1 <= e2 && e1 >= s2;
}

// Check if a leave ended recently (within last 3 months)
isRecentLeave(endDate: string): boolean {
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  return new Date(endDate) > threeMonthsAgo;
}



  viewDetails(request: any): void {
    this.selectedRequest = { ...request };
  }

  calculateDuration(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  }

  getStatusCount(status: string): number {
    return this.filteredLeaveRequests.filter(req => req.status === status).length;
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredLeaveRequests.length / this.itemsPerPage);
  }

  getVisiblePages(): number[] {
    const totalPages = this.getTotalPages();
    const maxVisible = 5;
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, this.currentPage - half);
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    return Array.from({length: end - start + 1}, (_, i) => start + i);
  }

  get paginatedRequests(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredLeaveRequests.slice(start, start + this.itemsPerPage);
  }

  navigateHome(): void {
    if (this.curRole === 'Medecin') {
      this.router.navigate(['/doctordashboard']);
    }
  }


  //stats 

  // Add this method to calculate chart data
calculateChartData(): void {
  // 1. Calculate leave status distribution
  this.leaveStatusData = {
    approved: this.leaveRequests.filter(l => l.status === 'Approuvé').length,
    pending: this.leaveRequests.filter(l => l.status === 'En attente').length,
    rejected: this.leaveRequests.filter(l => l.status === 'Rejeté').length
  };

  // 2. Calculate monthly leave trends
  const monthlyLeaves = new Map<string, number>();
  this.leaveRequests.forEach(leave => {
    const date = new Date(leave.startDate);
    const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
    
    const current = monthlyLeaves.get(monthYear) || 0;
    monthlyLeaves.set(monthYear, current + 1);
  });
  
  this.monthlyLeaveData = Array.from(monthlyLeaves.entries())
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime());

  // 3. Calculate assistant activity
  const assistantCounts = new Map<string, number>();
  this.leaveRequests.forEach(leave => {
    const current = assistantCounts.get(leave.assistantEmail) || 0;
    assistantCounts.set(leave.assistantEmail, current + 1);
  });

  this.assistantActivityData = Array.from(assistantCounts.entries())
    .map(([assistant, leaves]) => ({ assistant, leaves }))
    .sort((a, b) => b.leaves - a.leaves)
    .slice(0, 5); // Top 5 assistants
}

// Add these chart initialization methods
private initCharts(): void {
  this.createLeaveStatusChart();
  this.createLeaveTrendChart();
  this.createAssistantActivityChart();
}

private createLeaveStatusChart(): void {
  const ctx = document.getElementById('leaveStatusChart') as HTMLCanvasElement;
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Approved', 'Pending', 'Rejected'],
      datasets: [{
        data: [this.leaveStatusData.approved, this.leaveStatusData.pending, this.leaveStatusData.rejected],
        backgroundColor: [
          'rgba(39, 174, 96, 0.8)',
          'rgba(241, 196, 15, 0.8)',
          'rgba(231, 76, 60, 0.8)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.label || '';
              const value = context.raw as number;
              const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      },
      cutout: '70%'
    }
  });
}

private createLeaveTrendChart(): void {
  const ctx = document.getElementById('leaveTrendChart') as HTMLCanvasElement;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: this.monthlyLeaveData.map(d => d.month),
      datasets: [{
        label: 'Leaves per Month',
        data: this.monthlyLeaveData.map(d => d.count),
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgba(52, 152, 219, 1)',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: true
          },
          ticks: {
            precision: 0
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
}

private createAssistantActivityChart(): void {
  const ctx = document.getElementById('assistantActivityChart') as HTMLCanvasElement;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: this.assistantActivityData.map(d => d.assistant.split('@')[0]),
      datasets: [{
        label: 'Leave Requests',
        data: this.assistantActivityData.map(d => d.leaves),
        backgroundColor: 'rgba(155, 89, 182, 0.7)',
        borderColor: 'rgba(155, 89, 182, 1)',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: true
          },
          ticks: {
            precision: 0
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
}
}