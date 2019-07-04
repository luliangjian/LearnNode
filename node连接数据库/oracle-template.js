var oracledb = require('oracledb');
var config = {
    user:'******',　　//用户名
    password:'******',　　//密码
    //IP:数据库IP地址，PORT:数据库端口，SCHEMA:数据库名称
    connectString : "IP:PORT/SCHEMA"
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
        connection.execute("SELECT * FROM ( SELECT A.*, ROWNUM RN FROM (SELECT * FROM 你的表名) A WHERE ROWNUM <= 10 ) WHERE RN >= 0",
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
