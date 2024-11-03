import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { User } from "src/users/users.model";




@Table({tableName:"user_roles",createdAt:false,updatedAt:false})
export class UserRoles extends Model<UserRoles>{

    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id: Number;

    @ForeignKey(()=>Role)
    @Column({type:DataType.INTEGER})
    roleId: Number;

    @ForeignKey(()=>User)
    @Column({type:DataType.INTEGER})
    userId: Number;


}