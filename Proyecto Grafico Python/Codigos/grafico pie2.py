import matplotlib.pyplot as plt

cantidad = [2,11,12,130,141,4]
variables = ["0-5 años","6-11 años","12-17 años","18-29 años","30-59 años","60-mas años"]
colores = ["blue","red","yellow","green","orange","pink"]
desfase = (0, 0, 0, 0, 0.1,0)
plt.pie(cantidad, labels=variables, autopct="%0.1f %%", colors=colores, explode=desfase)
plt.title("TENTATIVA DE FEMINICIDIO 2020" )
plt.axis("equal")
plt.show()