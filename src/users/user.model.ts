import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


interface UserCreationAttrs{
    email:string,
    password:string
}

@Table
export class User extends Model<User, UserCreationAttrs>{
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id: Number;


    @Column({type:DataType.STRING,unique:true,allowNull:false})
    email: String;

    @Column({type:DataType.STRING,allowNull:false})
    password: String;

    @Column({type:DataType.BOOLEAN,defaultValue:false})
    banned: String;

    @Column({type:DataType.STRING,allowNull:true})
    ban_reason: String;
}