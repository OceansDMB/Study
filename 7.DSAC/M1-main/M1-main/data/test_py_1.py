#!/usr/bin/env python
# coding: utf-8

# In[3]:


import numpy as np

# simple code for cqalculating pi
N=10000
x=np.random.rand(N).round(2)          # simple version
y=np.random.rand(N).round(2)

cnt=0
for n in range (N):
    if ((x[n]*x[n]) + (y[n]*y[n]) < 1.0) :
        cnt += 1
    else :
        continue
pi = 4*cnt/N
print(pi)

