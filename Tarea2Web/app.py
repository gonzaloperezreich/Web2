from flask import Flask, request, render_template, redirect, url_for
from utils.validations import *
from db import db

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('inicio.html')


@app.route('/agregar-donacion', methods=(['GET']))
def agregar_donacion():
    if request.method=='GET':
        query_region= "SELECT nombre FROM region;"
        regiones = db.get_region(query_region)
        return render_template('agregar-donacion.html', regiones=regiones)
    
    
@app.route('/agregar-pedido', methods=('GET', 'POST'))
def agregar_pedido():
    query_region= "SELECT nombre FROM region;"
    regiones = db.get_region(query_region)
    if request.method=="GET":
        return render_template('agregar-pedido.html', regiones=regiones)

    elif request.method=="POST":
        nombre = request.form.get('nombre')
        email = request.form.get('email')
        celular = request.form.get('celular')
        region = request.form.get('region')
        comuna = request.form.get('comuna')
        tipo = request.form.get('tipo')
        cantidad = request.form.get('cantidad')
        descripcion = request.form.get('descripcion')
        error=""
        if solicitud_isvalid(nombre, email,celular,region,comuna, tipo,cantidad,descripcion):
            db.create_pedido(comuna_id=1,tipo=tipo,descripcion=descripcion,cantidad=cantidad, nombre_solicitante=nombre, email_solicitante=email, celular_solicitante=celular,)
            return redirect(url_for('index'))
        else:
            error += "Formulario Incorrecto"

        return(render_template("agregar-pedido.html", regiones=regiones,error=error))


    

@app.route('/ver-donaciones', methods=('GET', 'POST'))
def ver_donaciones():
    return render_template('ver-donaciones.html')


@app.route('/ver-pedidos', methods=('GET', 'POST'))
def ver_pedidos():
    return render_template('ver-pedidos.html')

@app.route('/ver-pedidos/pedido', methods=('GET', 'POST'))
def pedido():
    return render_template('informacion-pedido.html')


@app.route('/ver-donaciones/donacion', methods=('GET', 'POST'))
def donacion():
    return render_template('informacion-donacion.html')


if __name__=="__main__":
  app.run(debug=True)