import matplotlib.pyplot as plt
import pandas as pd
df = pd.read_csv("sales_data_webstore.csv", sep=';')
plt.figure(figsize=(10, 6))
plt.hist(df['Total Price'], bins=20, color='skyblue', edgecolor='black')
plt.xlabel('Precio Total en $')
plt.ylabel('Unidades Vendidas')
plt.title('Distribución de Ventas por Unidades')
plt.show()
