import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";


interface UserCreationAttrs{
    email:string,
    password:string
}

@Table
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный id"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id: Number;

    @ApiProperty({example:'test@test.com',description:"email"})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    email: String;

    @ApiProperty({example:'1qewqweqw12d1',description:"Пароль"})
    @Column({type:DataType.STRING,allowNull:false})
    password: String;

    @ApiProperty({example:'true',description:"Забанненость"})
    @Column({type:DataType.BOOLEAN,defaultValue:false})
    banned: String;

    @ApiProperty({example:'какая то причина',description:"Причина бана"})
    @Column({type:DataType.STRING,allowNull:true})
    ban_reason: String;

    @BelongsToMany(()=>Role, ()=> UserRoles)
    roles: Role[];
}