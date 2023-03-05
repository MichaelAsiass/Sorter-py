import tkinter as tk


root = tk.Tk()

label = tk.Label(root, text="Click Python Sorter App" , font = ('Arial', 18))
label.pack(padx=10, pady=10)
button = tk.Button(root, text="Start Sorting", font=('Arial', 18))
button.pack()

root.title("Click Python Sorter")

root.mainloop()

