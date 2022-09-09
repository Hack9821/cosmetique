from email import message
from tkinter.tix import ButtonBox
import pyautogui as pt
import time
10
limit = input('enter limit:')
message = input("enter message:")
i=0


time.sleep(3)

while i<int(limit):

    pt.typewrite(message)
    pt.press('enter') 
    i+=1