import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.css']
})
export class RoleSelectComponent {
  userData: any; // JSON data from local storage
  selectedRole: string = ''; 
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Fetch the JSON data from local storage
    this.userData = {
      "status": 200,
      "message": "Authentication Successfull",
      "name": "ROHAN .",
      "sapID": 11003977,
      "authorizationAreas": [
        {
          "area": {
            "office": {
              "uID": "0005760496",
              "name": "EUDD III AGRA",
              "type": "UPPCL_DIVISION",
              "status": "ACTIVE"
            },
            "role": {
              "displayName": "EXECUTIVE ENGINEER (DISTRIBUTION)",
              "uID": "0004880",
              "role": "UPPCL_EE_DIST",
              "canGenerateReport": true,
              "canFeedInputEnergy": true,
              "canImportData": false,
              "canFeedUserWiseEnergy": true,
              "canSetDates": false,
              "status": "ACTIVE",
              "canUploadDiscomData": false,
              "canApproveDelete": false,
              "canFinalizeDelete": false,
              "canInitiateDelete": true
            }
          }
        },
        {
          "area": {
            "office": {
              "uID": "0000001036",
              "name": "UPPCL",
              "type": "ORGANIZATION",
              "status": "ACTIVE"
            },
            "app": "CST0004",
            "role": {
              "displayName": "ADMIN",
              "uID": "0013472",
              "role": "UPPCL_ADMIN_UPPCL",
              "canGenerateReport": true,
              "canFeedInputEnergy": false,
              "canImportData": true,
              "canFeedUserWiseEnergy": false,
              "canSetDates": true,
              "status": "ACTIVE",
              "canUploadDiscomData": false,
              "canApproveDelete": false,
              "canFinalizeDelete": true,
              "canInitiateDelete": false
            }
          }
        }
      ],
      "token": "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzYXBJRCI6MTEwMDM5NzcsInR5cGUiOiJPRkZJQ0VSIiwiaWF0IjoxNjk4NjU2MDMzLCJleHAiOjE3MDY0MzIwMzMsImF1ZCI6Ik9GRklDRVIiLCJpc3MiOiJVUFBDTCIsInN1YiI6IlNTTyJ9.gxRTpL3Fn3A2ggfQVq9CJCCf7sA82ZbcSP52N5bAo5biDvxHKJvEdvk5HKuM-MohSlFWqMIiYBWYi_WkG3uiulcQ45iMpfBLr8rOUWuPanXEocE8f0mpTbnQq24ZHxmb6DLTQQSebBI_MwnyPZnu8vq8lf3gpLm2hLuX0Pe5_QlMJSL31pvZ7zz2y8o-HEFRQCbR6lssBad-D-V0qJouyPr-Cl7RxdMTnH--FHv4SAM9zRfXVsybxHhW435W9y_p8p5n7uVpDsz43DCGi4IxFxyB6htvt6XorTKKhpyyieRzVGZ_DqCKc7z6aUX_TvQOcpq1NXuEdyg7zF2dXKJccw"
    };
    console.log(this.userData.authorizationAreas[0].area.role.uID);
  }
 
  roleSelect(role:any)
  {
    if (role.uID == "0013472") {
      // Route to admin component
      // Replace 'admin-route' with your actual route for the admin component
      this.router.navigate(['../admin/modify']);
    } else {
      // Route to user component
      // Replace 'user-route' with your actual route for the user component
      this.router.navigate(['../user/available']);
    }
  }
}
