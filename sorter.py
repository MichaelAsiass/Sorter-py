import os
import tkinter as tk
from shutil import move


root = tk.Tk()

root.geometry('200X200')
root.title('Click Python Sorter')

root.mainloop()

src = "<PATH TO DIRECTORY>"
musicdest = "<PATH TO DIRECTORY"
docsdest = "<PATH TO DIRECTORY>"
videodest = "<PATH TO DIRECTORY>"

docsext = ["docx", "pdf", 'xls']  # Add more extensions as per your needs
musicext = ["mp3", "wav"]  # Add more extensions as per your needs
videoext = ["mp4"]  # Add more extensions as per your needs

filteredList = []
dirList = os.listdir(src)

for z in dirList:
    for i in list(z):
        if i == ".":
            filteredList.append(z)

print("Sorting")


for x in filteredList:
    _, ext = x.split('.')
    for y in docsext:
        if ext == y:
            temp1 = os.path.join(src, x)
            move(temp1, docsdest)

for x in filteredList:
    _, ext = x.split('.')
    for y in musicext:
        if ext == y:
            temp1 = os.path.join(src, x)
            move(temp1, musicdest)


for x in filteredList:
    _, ext = x.split('.')
    for y in videoext:
        if ext == y:
            temp1 = os.path.join(src, x)
            move(temp1, videodest)
