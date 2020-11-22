import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('Profile')
export class Profile {
    @JsonProperty('location', String, true)
    location: string = null;
    @JsonProperty('languages', String, true)
    languages: string = null;
    @JsonProperty('avatar', String, true)
    avatar: string = null;
    @JsonProperty('bio', String, true)
    bio: string = null;
    @JsonProperty('sex', String, true)
    sex: string = null;
    @JsonProperty('phone', String, true)
    phone: string = null;
    @JsonProperty('age', Number, true)
    age: number = null;
}

@JsonObject('User')
export class User {
    @JsonProperty('pk', Number)
    id: number = null;
    @JsonProperty('username', String, true)
    username: string = null;
    @JsonProperty('first_name', String, true)
    firstName: string = null;
    @JsonProperty('last_name', String, true)
    lastName: string = null;
    @JsonProperty('email', String, true)
    email: string = null;
    @JsonProperty('user_profile', Profile)
    profile: Profile = null;
}

@JsonObject('AuthUser')
export class AuthUser {
    @JsonProperty('access_token', String)
    accessToken: string = null;
    @JsonProperty('refresh_token', String)
    refreshToken: string = null;
    @JsonProperty('user', User)
    user: User = null;
}
