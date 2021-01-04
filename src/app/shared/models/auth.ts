import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('User')
export class User {
    @JsonProperty('id', String)
    id: string = null;
    @JsonProperty('firstName', String, true)
    firstName: string = null;
    @JsonProperty('lastName', String, true)
    lastName: string = null;
    @JsonProperty('email', String, true)
    email: string = null;
    @JsonProperty('location', String, true)
    location: string = null;
    @JsonProperty('languages', String, true)
    languages: string = null;
    // @JsonProperty('avatar', String, true)
    // avatar: string = null;
    @JsonProperty('bio', String, true)
    bio: string = null;
    @JsonProperty('sex', String, true)
    sex: string = null;
    @JsonProperty('phone', String, true)
    phone: string = null;
    @JsonProperty('age', Number, true)
    age: number = null;
}

@JsonObject('Auth')
export class Auth {
    @JsonProperty('accessToken', String)
    accessToken: string = null;
    @JsonProperty('user', User)
    user: User = null;
}
