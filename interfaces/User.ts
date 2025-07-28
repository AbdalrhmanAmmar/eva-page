export interface Address {
  country: string;
  city: string;
  buildingNumber: string;
  unitNumber?: string;
  apartmentNumber?: string;
  addressDetails?: string;
}

export interface IUser {
  _id?: string;
  name: string;
  phone: string;
  email?: string;
  gender?: "male" | "female";
  entityType: "individual" | "organization" | "company";
  verificationStatus?: "pending" | "approved" | "rejected";
  entityName?: string;
  accountRole?: "owner" | "employee";
  jobTitle?: string;
  addresses: Address[];
  maintenanceContractActive?: boolean;

  commercialRecordNumber?: string;
  commercialRecordFile?: string;
  taxNumber?: string;
  taxFile?: string;
  nationalAddressNumber?: string;
  nationalAddressFile?: string;

  role?: "user" | "admin" | "superadmin";
  points?: number;
  accountVerified?: boolean;

  hasLoggedIn?: boolean;
  createdAt?: string;

  password?: string;

  verificationCode?: number;
  verificationCodeExpire?: string;
  resetPasswordToken?: string;
  resetPasswordExpire?: string;
}
