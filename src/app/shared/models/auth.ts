import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('User')
export class User {
    @JsonProperty('id', Number, true)
    id?: number = null;
    @JsonProperty('username', String, true)
    username?: string = null;
    @JsonProperty('first_name', String, true)
    firstName?: string = null;
    @JsonProperty('last_name', String, true)
    lastName?: string = null;
    @JsonProperty('email', String, true)
    email?: string = null;
    @JsonProperty('avatar', String, true)
    avatar?: string = null;
    @JsonProperty('location', String, true)
    location?: string = null;
    @JsonProperty('token', String, true)
    token?: string = null;
}

