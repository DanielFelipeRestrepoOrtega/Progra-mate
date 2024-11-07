import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Cargar el CSV con datos separados por punto y coma
df = pd.read_csv("services_data_webstore_semicolon.csv", sep=';')

# Asegurarse de que la columna 'Date' esté en formato de fecha
df['Date'] = pd.to_datetime(df['Date'])

# Verificar los primeros registros del DataFrame para asegurarnos que se cargaron bien los datos
print(df.head())

# ---------------------------
# 1. Gráfico de Líneas: Evolución de "Total Price" o "Hours of Work" a lo largo del tiempo

# Agrupar por mes y calcular la suma de 'Total Price' y 'Hours of Work'
df_monthly = df.groupby(df['Date'].dt.to_period('M')).agg({
    'Total Price': 'sum',
    'Hours of Work': 'sum'
}).reset_index()

# Graficar la evolución de las ventas (Total Price) a lo largo del tiempo
plt.figure(figsize=(10, 6))
plt.plot(df_monthly['Date'].astype(str), df_monthly['Total Price'], marker='o', label='Total Price', color='b')
plt.plot(df_monthly['Date'].astype(str), df_monthly['Hours of Work'], marker='o', label='Hours of Work', color='g')

plt.title('Evolución de las Ventas y Horas de Trabajo a lo largo del Tiempo')
plt.xlabel('Fecha')
plt.ylabel('Monto (USD) / Horas')
plt.xticks(rotation=45)
plt.legend()
plt.tight_layout()
plt.grid(True)
plt.show()

# ---------------------------
# 2. Gráfico de Barras Apiladas: Distribución de Servicios por Mes

# Agrupar por mes y servicio, contando el número de pedidos por servicio en cada mes
df_service_monthly = df.groupby([df['Date'].dt.to_period('M'), 'Service']).size().unstack(fill_value=0)
df_service_monthly.plot(kind='bar', stacked=True, figsize=(10, 6))

plt.title('Distribución de Servicios Prestados por Mes')
plt.xlabel('Mes')
plt.ylabel('Número de Servicios')
plt.xticks(rotation=45)
plt.legend(title='Servicios')
plt.tight_layout()
plt.grid(True)
plt.show()