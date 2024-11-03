import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";


interface RoleCreationAttrs{
    value:string,
    description:string
}

@Table
export class Role extends Model<Role, RoleCreationAttrs>{
    @ApiProperty({example:'1',description:"Уникальный id"})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id: Number;

    @ApiProperty({example:'ADMIN',description:"Роль пользователя"})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    value: String;

    @ApiProperty({example:'Администратор',description:"Описание роли"})
    @Column({type:DataType.STRING,allowNull:false})
    descrition: String;

    @BelongsToMany(()=>User, ()=> UserRoles)
    users: User[];

}