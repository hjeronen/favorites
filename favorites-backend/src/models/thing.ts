import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

interface ThingAttributes {
  id: Number;
  name: string;
}

class Thing extends Model<ThingAttributes> implements ThingAttributes {
  public id!: number;
  public name!: string;
}

Thing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'thing',
  }
);

export default Thing;
