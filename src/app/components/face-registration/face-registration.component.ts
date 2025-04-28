import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FaceAuthService } from '../../services/face-auth.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-registration',
  templateUrl: './face-registration.component.html',
  styleUrls: ['./face-registration.component.css']
})
export class FaceRegistrationComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement') canvasElement!: ElementRef<HTMLCanvasElement>;
  @Input() userId: string | null = null; // Pass this from parent component

  
  isRegistering = false;
  registrationSuccess = false;
  errorMessage = '';
  videoStream: MediaStream | null = null;

  constructor(
    private faceAuthService: FaceAuthService,
    private authService: AuthService,
    private router: Router
  ) { }

  async ngOnInit() {
    try {
      await this.faceAuthService.loadModels();
      await this.startCamera();
    } catch (error) {
      this.errorMessage = 'Error initializing face recognition';
      console.error(error);
    }
  }

  async startCamera() {
    try {
      this.videoStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
        audio: false
      });
      
      if (this.videoElement?.nativeElement) {
        this.videoElement.nativeElement.srcObject = this.videoStream;
        this.videoElement.nativeElement.play().catch(e => {
          console.error('Error playing video:', e);
          this.errorMessage = 'Error accessing camera stream';
        });
      }
    } catch (error) {
      this.errorMessage = 'Could not access camera. Please ensure you have granted permissions.';
      console.error('Camera error:', error);
    }
  }

  async registerFace() {
    if (!this.userId) {
      this.errorMessage = 'User ID is required';
      return;
    }

    if (!this.videoElement?.nativeElement) {
      this.errorMessage = 'Video element not available';
      return;
    }

    this.isRegistering = true;
    this.errorMessage = '';
    
    try {
      await this.faceAuthService.registerFace(
        this.videoElement.nativeElement, 
        this.userId
      );
      this.registrationSuccess = true;
    } catch (error) {
      this.errorMessage = 'Error registering face. Please try again.';
      console.error('Registration error:', error);
    } finally {
      this.isRegistering = false;
    }
  }


  navigateToHome() {
    this.router.navigate(['/']);
  }

  captureImage() {
    if (!this.videoElement?.nativeElement || !this.canvasElement?.nativeElement) {
      console.error('Video or canvas element not available');
      return null;
    }

    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');
    
    if (!context) {
      console.error('Could not get canvas context');
      return null;
    }
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas;
  }

  ngOnDestroy() {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
  }
}