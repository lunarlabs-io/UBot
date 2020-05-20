global.shutdown = function() {
    console.log("Closing the MySQL connection...")
    global.con.destroy();
    console.log("Closed...")
    console.log("Shutting the bot down...")
    process.exit();
}