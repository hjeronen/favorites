import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

interface UserAttributes {
  id: Number;
  username: string;
  name: string;
  password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: Number;
  public username!: string;
  public name!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'user',
  }
);

export default User;
