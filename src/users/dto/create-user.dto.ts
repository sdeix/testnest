import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example:'test@test.com',description:"Почтовый ящик"})
    readonly email: string;
    @ApiProperty({example:'qdw1edwdasd',description:"Пароль"})
    readonly password: string
}