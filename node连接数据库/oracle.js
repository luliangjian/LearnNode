var oracledb = require('oracledb');
var config = {
    user:'SETTLE2',　　//用户名
    password:'SETTLE2',　　//密码
    //IP:数据库IP地址，PORT:数据库端口，SCHEMA:数据库名称
    connectString : "10.62.179.186:1521/ESOPDB"
};
oracledb.getConnection(
    config,
    function(err, connection)
    {
        if (err) {
            console.error(err.message);
            return;
        }
        //查询某表十条数据测试，注意替换你的表名
        connection.execute("SELECT * FROM SETTLE2.RD_SYS_OPERATOR",
            function(err, result)
            {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                //打印返回的表结构
                console.log(result.metaData);
                //打印返回的行数据
                console.log(result.rows);
            });
    });

function doRelease(connection)
{
    connection.close(
        function(err) {
            if (err) {
                console.error(err.message);
            }
        });
}
