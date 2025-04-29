import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FaceAuthService } from '../../services/face-auth.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-login',
  templateUrl: './face-login.component.html',
  styleUrls: ['./face-login.component.css']
})
export class FaceLoginComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('canvasElement') canvasElement!: ElementRef;
  
  isLoggingIn = false;
  errorMessage = '';
  videoStream: MediaStream | null = null;
  recognizedUser: any = null;

  constructor(
    private faceAuthService: FaceAuthService,
    private authService: AuthService,
    private router: Router
  ) { }

  async ngOnInit() {
    try {
      await this.faceAuthService.loadModels();
      const currentUser = this.authService.currentUserValue;
      if (currentUser?.idUser) {
        await this.faceAuthService.loadUserDescriptors(currentUser.idUser.toString());
      }
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
      
      this.videoElement.nativeElement.srcObject = this.videoStream;
      this.videoElement.nativeElement.play();
    } catch (error) {
      this.errorMessage = 'Could not access camera. Please ensure you have granted permissions.';
      console.error('Camera error:', error);
    }
  }

  async loginWithFace() {
    this.isLoggingIn = true;
    this.errorMessage = '';
    
    try {
      const video = this.videoElement.nativeElement;
      const detection = await this.faceAuthService.detectFace(video);
      
      if (!detection) {
        this.errorMessage = 'No face detected. Please try again.';
        return;
      }

      // Send the face descriptor to backend for recognition
      const descriptor = Array.from(detection.descriptor);
      const user = await this.authService.recognizeFace(descriptor).toPromise();
      
      if (user) {
        // Login successful
        this.authService.loginWithFace(user.id).subscribe({
          next: () => this.router.navigate(['/']),
          error: (err) => this.errorMessage = 'Login failed'
        });
      } else {
        this.errorMessage = 'No matching user found';
      }
    } catch (error) {
      this.errorMessage = 'Error during face recognition. Please try again.';
      console.error('Login error:', error);
    } finally {
      this.isLoggingIn = false;
    }
  }


  captureImage() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas;
  }

  ngOnDestroy() {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
  }
navigateToLogin() {
  this.router.navigate(['/login']);
}
}