const chatRoom = require('./../db/schema/chatRoomSchema');
const mongoose = require('mongoose');

function createOrGetChatRoom(req, res) {
    return new Promise(async (resolve, reject) => {

        try {
            // var roomExist = await chatRoom.
            //     findOne({ userIds: { "$all": [req.body.userIds[0], req.body.userIds[1]] } });
            var array = req.body.userIds.map((value) => {
                return mongoose.Types.ObjectId(value);
            });
            req.body.userIds = array;
            var roomExist = await chatRoom.aggregate([
                {
                    $match:
                    {
                        $and:
                            [
                                { "userIds": array },
                            ]
                    }
                }, {
                    $lookup: {
                        from: 'users',
                        localField: 'userIds',
                        foreignField: '_id',
                        as: 'users',
                    },
                }]);
            if (roomExist.length > 0) {
                resolve(roomExist);
            } else {
                var result = await chatRoom.create(req.body);
                resolve(result);
            }
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}


module.exports = {
    createChatRoom: createOrGetChatRoom
}