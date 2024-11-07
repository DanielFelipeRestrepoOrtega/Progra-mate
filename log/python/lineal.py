import matplotlib.pyplot as plt
import pandas as pd
df = pd.read_csv ("sales_data_webstore.csv", sep= ';')
plt.figure (figsize= (10,6))
categoria_ventas= df.groupby ('Category')['Total Price'].sum ()
categoria_ventas.plot (kind='line')
plt.xlabel('Categoria')
plt.ylabel ('Ventas por Unidades')
plt.title ('Total de ventas por categoria')
plt.show ()
