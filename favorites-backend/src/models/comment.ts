import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

interface CommentAttributes {
  id: Number;
  content: string;
}

class Comment extends Model<CommentAttributes> implements CommentAttributes {
  public id!: Number;
  public content!: string;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'comment',
  }
);

export default Comment;
