import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

interface RatingAttributes {
  id: Number;
  rating: Number;
}

class Rating extends Model<RatingAttributes> implements RatingAttributes {
  public id!: Number;
  public rating!: Number;
}

Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'rating',
  }
);

export default Rating;
