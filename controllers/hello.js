exports.hello = (req, res) => {
    res.json({
        "hello": ["chris", "ben"]
    });
};