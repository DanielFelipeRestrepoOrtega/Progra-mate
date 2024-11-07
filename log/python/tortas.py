import matplotlib.pyplot as plt
import pandas as pd
df = pd.read_csv("services_data_webstore_semicolon.csv", sep=';')
categoria_ventas = df.groupby('Service')['Total Price'].sum()
plt.figure(figsize=(8, 8))
plt.pie(categoria_ventas, labels=categoria_ventas.index, autopct='%1.1f%%', startangle=140)
plt.title('Distribución de Ventas por Servicio')
plt.show()