const http = require('http')

http.createServer(function(request,response) {
    response.writeHead(200,{'Content-type':'text/html'});
    response.write('<center>\n');
    response.write('<div class="wrapper fadeInDown">\n');
    response.write('<div id="formContent">\n');
    response.write('<div class="fadeIn first">');
    response.write('<img src="https://proxy.ingenieria.usac.edu.gt/autenticacion/XUI/images/login-logo.png?v=13.0.0" id="icon" alt="Icono de la U" width="40%">\n');
    response.write('</div>');
    response.write('<div class=""> \n');
    response.write('<label><font face="Arial" size=3 > INICIAR SESION INGENIERIA EN SISTEMAS</font> </label>\n');
    response.write('</div>\n');
    response.write('<form>\n');
    response.write('<br><input type="text" id="login" class="fadeIn second" name="login" placeholder="login" size=45 style="height:30px" ><br><br>\n');
    response.write('<input type="text" id="password" class="fadeIn third" name="login" placeholder="password" size=45 style="height:30px" ><br>\n');
    response.write('<input type="Checkbox" id="recordar" name="login" placeholder="recordaruser" ><label> Recordar usuario? </label><br>\n');
    response.write('<button type="submit" style="width: 350px; height: 30px;">INICIAR SESION</button>\n');
    response.write('</form>\n');
    response.write(' </div>\n');
    response.write('</div>\n');
    response.write('</center>');
    response.end();
}).listen(3000);