const fs = require('fs');

// تحميل ملف البيئة إن وُجد
if (fs.existsSync('config.env')) {
    require('dotenv').config({ path: './config.env' });
}

// دالة لتحويل النص إلى قيمة منطقية (Boolean)
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// تصدير الإعدادات
module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'Your SESSION ID Put' : process.env.SESSION_ID,
    PORT: process.env.PORT === undefined ? '8000' : process.env.PORT,
    SESSION_NAME: process.env.SESSION_NAME === undefined ? 'asitha' : process.env.SESSION_NAME,
};
