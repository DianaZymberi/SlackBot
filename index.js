const cron = require('node-cron');
const { WebClient } = require('@slack/web-api');
const token = 'xoxb-4554988756023-4572047752484-O14gKel98Pp8UmYvGsENgrGF';
const channelId = 'C04GRC8HYEP';
const slack = new WebClient(token);

const message1 = {
    channel: channelId,
    text: 'Good morning everyone, have a great day. \n    How to check in:\n      Check in \n      What Project you are working on \n      tasks \\ #id'
};
const message2 = {
    channel: channelId,
    text: 'Have a great lunch everyone, don\'t forget to AFK'
};
const message3 = {
    channel: channelId,
    text: 'Let\'s get back to work everyone, don\'t forget to type BACK'
};
const message4 = {
    channel: channelId,
    text: 'Good evening everyone, have a great night. \n    How to check out:\n      Check out \n      What Project you worked on \n      tasks \\ #id'
};

let currentTime = new Date();

cron.schedule('0 8,11,12,16 * * *', () => {
    if (currentTime.getHours() === 10) {
        slack.chat.postMessage(message1)
            .then(() => console.log('Message sent'))
            .catch(console.error);
    }
    else if (currentTime.getHours() === 11) {
        slack.chat.postMessage(message2)
            .then(() => console.log('Message sent'))
            .catch(console.error);
    }
    else if (currentTime.getHours() === 12) {
        slack.chat.postMessage(message3)
            .then(() => console.log('Message sent'))
            .catch(console.error);
    }
    else if (currentTime.getHours() === 16) {
        slack.chat.postMessage(message4)
            .then(() => console.log('Message sent'))
            .catch(console.error);
    }
});
