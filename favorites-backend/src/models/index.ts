import Thing from './thing';
import User from './user';
import Comment from './comment';
import Rating from './rating';

User.hasMany(Thing);
Thing.belongsTo(User);
Thing.hasMany(Comment);
Thing.hasMany(Rating);
Comment.belongsTo(Thing);
Rating.belongsTo(Thing);

const syncDatabase = async () => {
  try {
    await User.sync({ alter: true });
    await Thing.sync({ alter: true });
    await Comment.sync({ alter: true });
    await Rating.sync({ alter: true });

    console.log('Database successfully synced!');
  } catch (error: any) {
    console.error('Error syncing database: ', error);
  }
};

syncDatabase();

export { Thing, User, Comment, Rating };
