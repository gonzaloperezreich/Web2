import pymysql


DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306


def get_conn():
	conn = pymysql.connect(
		db=DB_NAME,
		user=DB_USERNAME,
		passwd=DB_PASSWORD,
		host=DB_HOST,
		port=DB_PORT,
		charset='utf8'
	)
	return conn

def create_donacion(nombre,celular,email,calle_numero,tipo,cantidad,fecha_disponibilidad,descripcion,condiciones_retirar):
  conn = get_conn()
  cursor = conn.cursor()
  sql2= "INSERT INTO donacion (comuna_id, calle_numero, tipo, cantidad, fecha_disponibilidad, descripcion, condiciones_retirar, nombre, email, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"
  sql = "INSERT INTO donacion (comuna_id, calle_numero, tipo, cantidad, fecha_disponibilidad, descripcion, condiciones_retirar, nombre, email,celular) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
  cursor.execute(sql,(1, calle_numero, tipo, cantidad, fecha_disponibilidad, descripcion, condiciones_retirar, nombre, email,celular))
  conn.commit()
  conn.close()

def get_region(sql_query):
  conn=get_conn()
  cursor = conn.cursor()
  cursor.execute(sql_query)
  resultados=cursor.fetchall()
  return resultados

def create_pedido(comuna_id, tipo, descripcion, cantidad, nombre_solicitante, email_solicitante, celular_solicitante):
  conn = get_conn()
  cursor = conn.cursor() 
  sql= "INSERT INTO pedido (comuna_id, tipo, descripcion, cantidad, nombre_solicitante, email_solicitante, celular_solicitante) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s);"
  cursor.execute(sql,(comuna_id, tipo, descripcion, cantidad, nombre_solicitante, email_solicitante, celular_solicitante))
  conn.commit()
  conn.close()