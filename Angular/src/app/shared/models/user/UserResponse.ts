import {UserProfileResponse} from './UserProfileResponse';
import {UserSecurityResponse} from './UserSecurityResponse';

export interface UserResponse {
    email?: string;
    roles?: string[];
    profile?: UserProfileResponse;
    security?: UserSecurityResponse;
}
