import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

# Cargar los datos desde el archivo CSV
df = pd.read_csv("services_data_webstore_semicolon.csv", sep=';')

# Crear una tabla cruzada para contar la frecuencia de cada combinación de servicio y país
tabla_frecuencia = pd.crosstab(df['Service'], df['Country'])

# Configurar el tamaño de la figura
plt.figure(figsize=(6, 4))

# Crear el mapa de calor
sns.heatmap(tabla_frecuencia, annot=True, fmt="d", cmap="YlGnBu", linewidths=.5)

# Añadir etiquetas y título
plt.xlabel("País")
plt.ylabel("Servicio")
plt.title("Mapa de Calor de Frecuencia de Servicios por País")
plt.show()
