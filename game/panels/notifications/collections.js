Notifications = new Meteor.Collection('notificationsnew')
Battles = new Meteor.Collection('battles')

if (Meteor.isClient) {
	NotificationsTitlesMine = new Mongo.Collection('notifications_titles_mine')
	NotificationsTitlesGlobal = new Mongo.Collection('notifications_titles_global')

	NotificationsUnread = new Mongo.Collection('notifications_unread')

	// todo: implement this.  same way as notifications
	//BattlesTitles = new Mongo.Collection('battles_titles')
}