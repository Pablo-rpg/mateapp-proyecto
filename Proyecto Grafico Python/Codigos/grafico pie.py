import matplotlib.pyplot as plt

cantidad = [163,107,18,10,2]
variables = ["Pareja","Expareja","Familiar","Conocido","Desconocido"]
colores = ["blue","red","yellow","green","orange"]
desfase = (0.1, 0, 0, 0, 0)
plt.pie(cantidad, labels=variables, autopct="%0.1f %%", colors=colores, explode=desfase)
plt.title("TENTATIVA DE FEMINICIDIO 2020" )
plt.axis("equal")   
plt.show()