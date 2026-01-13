import {userRoles } from   "../../types/types"

export interface AuthDot {
  firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: userRoles;
}