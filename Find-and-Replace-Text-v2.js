//Tool Index (Javascript) is Copyright 2015 TextMechanic.com All Rights Reserved

function gotourl(url){
var client_width = document.body.parentNode.clientWidth;
var client_height = document.body.parentNode.clientHeight;
client_width = client_width/1.5;
client_height = client_height/1.5;
window.open('' + url + '','_blank','width=' + client_width + ',height=' + client_height + ',menubar=yes,scrollbars=yes,status=yes,titlebar=yes,toolbar=yes',false)}

var radid_top = Math.random().toString(36).replace(/[^a-z]+/g,'');
var radid_bottom = Math.random().toString(36).replace(/[^a-z]+/g,'');
var bottom_img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAAeCAYAAADw+GCEAAAgAElEQVR4nO2dd3xUVfr/z52Z9FAEFEgIfV0VdYUU3Oa6q+u6RV13gVVXvwphJoAooljXQlFXUURKKoQOoStSrAgqvfdmAUEEqalTbjnv3x/nzmQSkpAg/rbN5/U6r5u5955+8Xz8PM95jiCCCCKIIIIIIogggosK8a9uQAQRRBBBBBFEEMF/GyIEK4IIIogggggiiOAiI0KwIogggggiiCCCCC4yIgQrgggiiKABkFhYEi5r3JfGcW4SYgfRNP4p2sQ8QsvYwTRpMpi4xMeJinsSV/STJMYNoVnCo8TGDyah6RAcjYegNXkWZ9OncSb255LEAVzq7E9s/NO4Yh4mJr4/jZo8RmLis7ii/kFU7GASmz+Es0lvYhIG0jSuP00Ss4hP6EdcwiNcEj+YZo6+XNakJz5TtdGrW0gCSAuQOlKafIuJaDuf2GbZOC7NQbTKx9lsKlrTQqKTpiIuy0G0slPLbETLXETLfPuaW/msVY56t/r94O/LchCt7GvLbLRWBYiWExCXjke7rAjRvICo5jnEN3qT+A5v4dMBGQAsZMDCkgGkVB3xBfwIIdA0jZiYGIQQOJ1OhBAXPWmaVuW3w+EI3QteXS7Xv+qzi+A/EBGCFUEE/wuQIAGwAFi7ZR+rN+9j9Za9rNu0l/Wb97N68z5KykrVi7KGvLLyduVjCwu1GFoyLGu1F8PfDy+verv2HT7D5v1H2bLvazYdOMbm/UfZuP9btu09FnpXvW9UlivDyg61prLMUPlSkaPwrmH/lva7SLPyedUXQzAtVXvzxAeJcfZBOPuiiT4I5704nZkI4UaIPiSJu0nT/sTvtRvpIW7g7+IWbo36OVeKX3OJ468I8VeE5kG4nkUTAxFiIE0S3fykTQ/+cM2v6P2rDAb87tfc+4vf8/srb6dt7D04RRZCDEFE9cbpuB+HeAghnkBrlEmUyMRCYkl7eKSO5Vd91Akg8ZHYZDzoEvxQLi2gDNDRDcAywQR5ERIGYNrJUPcCVOA3QKcULyAtEEmvgAxgAn6pIyVg+vBbIKUELKKjowkEAqHx13W95om5yDBNs8rVMAw0Tfv/UncE/x04l2DtGkqXGth9l6G7/gXN++/H3J6VY9xzbr1y0DM4L12G8p88Kw3ve4Nr+A8aqx++rUFy0qv/SFLSM0nOcJOckUlShoeU9ExadVe/kzMycT+ew5rNu6vyrDCCFSqsGhFTK2slsbHCWFE4SZPy3OyzPtpON0823bLySfPkk+rJppsnh/R+uXRzjyfVncPt/5hJ/uINlU2wCZGsRuSqXlV7LKneL1iymVR3Dt08OaS6c1ix7RBHvz1Jj36v0aPfawx6IZ838peGEbWqMExF0y6Jf1QRK0d/NJGFiLmHWFcm1zjupZ/4OdMciWxwCnY5BZuiYvksKobNTsEq0Yps5xXc0fg6mmn3I7RHaRR7D/2vvY65A67mxOTGMENg5TlgXCwUupBTBMZ0jcL7O/PTy/8PIYagiQFERw9AaH0QWh+inQ/jtftoGSAJgAW6UYGUJn7LizMlj3J/gNiokWhxBbiiRyMajUbEjcYROxYtbixa/DgcYUmrlhzx49ASxlS7n10lnxY/DhE3FhFWnoibSJPGsxHiSRpFPQ9+EJdNwTIkmBbl+PBKgAq8wdGXIIRASollWXV+3z8ETNNEShkiWUJENIkI6o8qX0v4gldz6skPsg7+R2IuPRvMCs7NEyFY/0qCdSFz+EPh/wPBMqGspJzkdA/J3T0kdc8kJd1NUnofkrt7aNPdQ3KGm6QMN5d170tyRm+Wr1xr5zbsQiBIWExbFbLQw4hMpSIUIjkyLF848wkrC2nyWO6HpGblk+rOIdVdQIYnl1R3Dl3duWS48+nqyaObJ4eMvjm8OHsdmIEwBctSDIqweuzfVYichD89PZ00Ty7d3AV08+Rw5FQJYPBG/lJeL1zErX8fwRuFS0JmqnPGUYIPi0ub/EOpVY4shOZGEwO43XETC0VrvhKCPcLBKqGxWotit4hmtUuwQwgOCie7hGBlvOAlLZW/ip8xauBPsfKdUCCQ+QLGC8gRWAUCq0BD5mvwZjTWZEFJXizP/fZqmjruxCEeRoi+xGsD0URfyqTXJp06WMVKUULHwsQyJNplReh40UQ+osM0GiUVoCXPQHSejOhQiOgwEdGxEIedtA4TER3zEJ0mIDpNQnQsQHQsVL87TER0nITolB+6r3UoCOXXOhSo9zoWqmeX5yOSJ5HYvhChjcFAx5FcANK0BS8/6IBZRoU0sAwTiRUiNdJm0ecQLVntT8us8n4VxRRqnNdwIh7+/QSVTcuyME0Tl8v1LyF6EfxnopJgze1ZP1v1f/iifjGwa2gXNRYNWJxry/PDk4x/X/wr+34hc/jfgOWfrqF1el+SMzJpY5Os7rc/yW/vfZbkDDcpGfeTfH0f2qZl0iYji1v/PqIKGZLoatEJU6XO4UwS204UhBGmWlkgTUXOwgiXxOLGRyaR1nc83frlkpqVww2DJ+J+ZSG3PTODrllKccrw5NLNk0O3frnsOVxcWXHoatkEw6pCqpDKWlXqDZCWlUOqO49UTza3Pz3jnAW6qtnxXFiYYFpcFt0fTRuMiOpHnNPNI67OrI2KZq9ozKdRTrYLwQ6Hg080wQbRmK2iBRuEYJdDY4MQrI6/lG3CgfHwZVRMdFAx0YWVLTALNAIToiDXAdnNIbcpslBgThLwpsDKS8ScICi6vyVO0R8R1R+XGIxw9MfCVP0PSYTqt2kBlKK1mIQuQcS9RGLSIqIvK8LVcRJxbSegdSwiul02ov0/ER0mIzpPwvHjfEXA2k3E0X4GouNsXO1n4ug0HtFhKlrSPESbApuETUVcPpOY5PFEtc9G/GgaovNktJRpxCXPQ0uZgZY0hriUaQjHaHxYiGZvKF6jewnY34MXH9KnRhpA0zQsw1SEOSxJ0yb6plK3LMNUhN+ywF9BQKovtlyCgYmUUCYBqVNO5bcopUSCbYa01PdqfwiGYdh1RBSsCBqO0NdSRb2qvuhUIV9d+J+2FoaPRX0X5zryRAjWv6DvFzKH/+mQ6v/oXy98i6SMoCnQTS/36yFSUVrmp8/j40jqnknbDA+t0/vSOuMBwGLusjWMmriIXv3e4M6s1+nZfyQ9s0ZxZ79XeHRoAes27Qv5OGUOGctf+r9Kz6zXeH3iMqhGpnbvP0rmEzn06PcqPfqNoke/V9m6/yip7hzSPLZ50J1HqTcQEhWWrt2tTHpZ+aTaZKvow50cOVVG3pJNPJazjAdGvkOfV9/G/VrltejDnZSUB/13LFZsO0yqZ5wiaZ48Hst+L8wHywqNFdgKXQ0ISB9YkpYtByHEEwhHb3qKX7DVGc02IdghotjjjGOTQ7BOE2yN11gvYtkhNFbHa2wVsWwTgq0ilq+FxhohWOXSKJ4eh56TiMzRYJLAekNgzRCYEwTkCqxxGubURIwcATnx6HmX8Ohvr0XEDEZo/XCIAeiY2LzB7oqukgXgI/qyOQRM0KL/gYgei0jMQzTJQyTkIWImEdNkCiJ+PFqT6YjEHJwJBQjHDBzN8olqlIOIG4pIGINIyMZ5aTai0UicLaahJc7C0WI8rvgpxDbLQbhex9m0EK3pGKKb5SFi3kRrPoGYxm8iEt4gxvVPKnRJTPKUynZKRYJ0DNDBlBYBQyc2OgbLMNm7ew+bNmzkyNeHwZKcPnmKVZ9+hpSSXdu2s3H9JkWygLKT3/HR8hV8sWMn5QBn9hH4YgPlR9ZjWvD59q0cOnQ4pFxtXL+Jffu/5OOVy9mwfhW7du9l3Zq1rFm1llOnTqk2SonD4YgoWBHUGzUSrJrWnNqe15kv3J8r7GH1PCE1oQ6V7ELyhOWuNL/USRR3MbRL+PPwfF3o0qV6Geevu1azq53nnPE7R0msbpatw5RUi/9c/UhEWN+rlNvQ+zXMTS0+fOed09raXe9+njtW55uPhvahJtT5PyvVxy5Ubl0mwpq+35q+jbqgCMRfs0YqU2C6MgdOKnqvitIzd9kakrtnkZKmzIjJGW5MrJCvVqvumbSxzYfJGW7adO9LSnomSekPMOKN+Uhp0q57FkndM0MkTvGUSr+sXv1HkpTmpk13D23Te/PC6NksWbuPru5s0mzy5H5lYcgHKti+1CxlKkzvq0yFsz7ayeM579LVU0BavzxS3XlkeHKUH5cnh1RPNl2zcvjjMzMordABi4J3NthmSFXGjOU7lSIlrRChktUduqohQAX4LaKbD0KIQVwe8zdWOFuwQnPyhRBsE4IPXIKVogk7xSVsFoItIpFP41ysEQ6+0prx0SWC8sxomCAITNTwTRUwVoNpAutNgZEvIDcGfbwTK8+BLBSQp2HkCMqnOOBNgXd6DMX5iWS0v5kYzY1DPIhp+UMES2LYLv8Glu18LhImY8oA+ZMOM/uto0xeuJtJS/Yzf9l3fLTqOPOWHuftd79mzqzPWbTgOIve/5KP1p9kyoJtvP32LpavOcritz9n7rJSFr+/nkXrTrBoxbcsWv0ly5YeZNqs3Uydf4DZyz5n4ZJv+XB5MQuW7Wbmwv0ULvyWmUXfMHXhUQoKDmBgIpqNw7Is5WNl6jZJ9xEI7pjAVo0syX1/v5e2bVJol9KWHn/5K5+sWEmnTp3Iz83jx50687Of/Ywxo8eyYME8kpLb87ubf8VVSclweCXF2bdjZP8ROfEmSqf3ZuSAnvz6F9cTkDBv7iw6J7Xm+RdG0LZzZzp3aEOvXnfRsX0Hbrn5t1x99dXcd999FBcXo2la5fcRQQTnQYhgVV9Q6i/OfD+CVXuqunhcSJ565avS6KoLX/UFeGg9F+d61X++Bb9WMljzQlwTIag/Aa1eRvg4ViWZNbWjknjUMX41tOFC5rRh/bwQgtWwPtQykGEEsAYSVOPzWghWbWSyxjmpHUEzSEp6b5Iy3Mqh/fq+7Nt7lPCdc48MzSUlXRGnpPQ+XH/7k6zZvLeKj5YiVh6bdLlJSfPQ+nrlKC+BW+4dRtsMD0m2P9eRYydC7Zi/dBUp6W5F4tIzufLmQZSWeBk+ax1pnly6evJIyxrPiKKNVXxlNh04Qponl/S+eaT1y6ObJ49N+77htqdnkerJJtWdw42PTOLGRyaFHNi7efKUr1W/XIo+2ooE+o58i26ePEXKPLls3X/EHiBblagiTtShYEmThBaPEeUagKfRz9krBNtFLOs0Fxs1jQMiho1aE3aIRA4IJyudGrscjdgS4+IzobFZCLY3cbJWU/l2ag62CwE5MchpGv4cgXzDBYUaZnYsjEnAKlAkzDstEZktODtVwESNuQM6ESP6EiUeJIBt5gp1xwSp278NROJoJKcp9ikTagmleLHYt/8kWw+dYM83tnHVKsYy/Rwq09n65XFMWYwX2LnHR4UO5ZRQAby/ppj3V57g6NliAn6wOEsAKEdy8BudLw4ZfFdWijQtKihGSi8+yjEN1TrR+DXljB80OZsWFuV4kZSVlFfxwbrzjj8z9s0x7N+7j64/uY4+ffrQoUMH+vTpw69+eQPLly/n7Olirv3JVUyYMgspy9m9fQeByXdSPqcfcsMEzHV5MHcAmwuf5JrOKew5dIL7/+9unh2Uxbhx2aT/4jdsXrea9999jw7t2nP0yDe0a9eO1atXA5UO9xFEUB+EGZRr+7/kWhaJYK6LQLAqH1Vb3L5nnqpqUHgfalIQaiirpn7/gCbC6otl+LPKNta0EIfPXX36WQtC8xXWjmqKWqj5NbwbTn56VmXHDZzT2lSghvazFtJSx3w0tA+1DGSV9lR/vQpJrKlvYW2tHIfaiWZ9lDUJiiilK2KUkp5JcrqHktJyAI4cO8GwUTNJyvDY6pMiUm8ULGHPgSO8MHoWH3y6OlSYiQr1ECRZQTULoM/j2aGdiSnpmazZug+AklIv3W9/ipT03rY6lsncZWvAMrntmenKuT0rl26ePJau2QdYlPl0lqzezw2Dp5DqGcd1/XLDfKdMhs1ez+I1e22FSrWtxKuT+dpbdLOJV6o7h/zFm5DAjYMKQ/WkZeVUOkBzrj9Z7WOpFJemjYbQTPRihojj4yaJ7L/mGjaLOLa0v4rtV1zDZodgq0uwWRPscQhWOhxsEII9QrAuRmDkOpH5yvRn5TZGjheUThAwLp4TRU2Ry27FyE6EHHU/MD4WOTkKOV4g853IUQLyGlFRoPGbtveiiX5Y6Gq3pBnusK2rUAnoRDfPBlliE24dpKJkqz/4AtF4FFExb7Di/QDStPh09Rkc0a/RvNkkAsVw613vEe18iplLKliz6jtiL51KghiJ0F6ksXiTJx7bhBEwCVDG5HlHcTheRrjGcePtszAMA1MaWKaOjlf5URmgXVqAlOXYfMsmXhUqygRgWGZINerRowfZ48aj+wP06tWLXr16kZKSwvadO+jXrx8pKcnc1etvdOjQjp07dyOpABOKX/81gQ9eQh7eg+/YZsxlIyhZMZHf3dCdu9wP0rlDGw7t3MjoUW9w1bXdeeCee5g2aTLt27ajbZsU7rrrrpCZMEj2IoigPqj2tdRFsmpeLL4vwTp3cah5EW14nurmvupdP1+eWhauH5BgnVNfjfnOR7C+jz9TZf+DbQku5D179qzx/nkVmHP6+X3mtKH9bCjBangfaq+6tjpq+y7ru4vw3H+j9TNdWhTOejdEnEIkK0MpWUHiFTTrJWe4ufXe5ygpKQHUYldSWs6azXuZv3QVrxcs5fWJi0P+XG26e8i47QkkFq8XLAntRkzOcDNx9ntILEZNWFbl/VvuewEJlFcEQiEZUu2dfel988jw5IaFa8gLmQ9Ts3LZfEApT9IOvLRp37es3HaQvCUbyF+8gczXFobK6JqVzdZ9x9hz+Izy88rKoZu7gMyRi+o1bjXesuCyxv+gi/ZHdsRobBoyHFn2JdNSf8q2DR9x4vhOtlzfne+u/wMbu6ayQQgOXXktO2++hY0DH+HY5MWsF4JPo6PYJJwsjxKsjI6B5ztyavG9VPgOs2Xjt7DpRYx5vyDwzq3I/ASKx14G02+nPP9SypemsWXMo8izO+h5489xCI9tbgsGo7JsIhVAqhBXiEa5YCgyKo1yoBQdP3ih622LENFvsmLNISrkSW64dQ7CNZ4xM47jw0C0Got26SscLoUb/zwTIfIZNfM0a3Yf586/zGT55hIsCacC0OqqAhonzUA0y+PKXy7DlAFMHTBUHDFpk0DRLBvDUKZMy8R2ZvdXDrUhcQjl5H7f3+/lny+9zIrlH9MupS2PPzaEzh07MadoLtu3bmPw4MH06tGTa6++hscfewoLnY9mF3Fi4bOULHgYff085JZCzrz1LKe3LOKDxfNo1/FKet55O5h+Ro4cyd/u6Y0V8LPq08/o3LETd/X6G7169QqZMTVNCzm+RxDB+VArHa/LfHOxfbBqr7tyAWpwnvC6a1ywalro6lYe7Ip+MIJVv/GraSGuy6zVsE0JofbY9anfXRg6125Llfth7TqvKesizGmD+9lAgnUBfagdtRCpWr/L2gnW+cyi9SVYmU/khNSppAxl1ksOmgttRalN974kZbjpmfUapSVeJDB32SpuvXdY5bu2WhUsK2hOdD+eo3qybE3IhJic4eb50dM5fPRMFb+t1ul9WbN1HxJYuf1rUj3ZpHny6dY3O2TiS/PkhxStdLciWbc9M4PN+4+ChK+/PcGIorXKRJiVS7e+KoZWqiebrp6CkJkwNSuH4ooAS9buU+Vm5ZDqGceLszecd9RqVLICgC65pMVgbnH9mlUimveKPqBMh2lDx3D2rEHJzp1Mf+gfrN1/jIMH97Jz+KucPlTC9oXvsOKtjyg+WcqRoS+xYd/H7Nn7Octuz+LkgW9Y8vYnrNtXgrF1LIse/RGLn7uDVR/s5osjXnYvHc3Bz/dx8NBhvKfe5+S+A3y16zQHT7/DE7/6DcLRn4CSqkK7CKWUKoyGCX5pojXLUcFEpQwF8vQZJhiQ+dxahHiRFdvOsGjdCYSYxk+un0qZhLnvHkDEF3D97UvwmZB07WQcYiT9R22kHCiXUI4XI2DyZv63iMRnefSVnbS4Kp/4TjPwUmbHRKuw1Solg4pmryHtnX9GmDnTtEDX/UgsnJoDUzfo8Ze/0rF9B1KS2/Dyiy+x+rNVXN75Rzzy8CB+1KkznTp1YkJ+ARvWrOXq635O0o86cH3bJnBkIxUz+sD0B5AFN8OyJ8EqofjUSbp168Zbc+ZhSovxOdm0b9eZDiltueeuu+nQrj2HvjpI165dGTduHBBRsCJoGOr5tVRb2Go0YVwIwap5oaqpzAbnqaXuuus5n+rFvynBqt7270G0gm3tMpRdoTJ7MjdYb5eh7Aprw7kmw/OnC57TBvfzhyJY9VMJazLj1WqCPK+JsOqzhpoIAa646RGSMjwkZ/S2Y2BlktS9MlxDxm1P8ujQgioBRge/UECbNEW6gj5YKelubr33Ba6/7ZnKYKXdM5lY9CEAazbvtolUH5LS+9Kj36t4Hh9PckZvWnXPpHV6XwYPKwiFVch/Z12IFKV58pVpLyuXrllKrfrVoEIez3mXJWsOUF6hdgQuWb1XhVqwwy2k2TGz7nhqBn1efYdu7vE2Scul92uL8JkwbPZ65dyeNYFunjxWbjt4/kGrKRaWNMEwcbXMpIfrJhaJNixZ9Tlr1x1g66aDbNr1HV+NHs+iP2fyTuHH7Nr/BbMX7OX418d5s20Kx99bxbqHnuW7rQc4tHQFG7/Q+WzuQs6cOkT2316hYs8uymY4ODPVyf5h7XhvcgHrdm5k50efcvToMSYMXcDJkmMUDfoRCxacRt81jpdu6YTQHsKUQX8mOxYU2DGxJAEJWvPRYJhKtTLVzk7D8iOl5JkXtiO0Z3gx5ys6/3IMztiRrP70LF7gb31XIlyvMiZvE+US3n33NM5WeWiuh2jbZQJrN59FpxSjGBKazKBpaj5HDEi5aiLRLadz1muiZq4CU1oquCggmr8aChKrI5GyPEw0VH8ESU1w914w8Gd4ANBDh77i8KGv1XuGCZbJ6rVrMHUISDDNcqxjO7D0k5QQ5HcGu7dtQmKF4lwp9S9IQINhHyqjx2tC1G0/jiCCMKgv97xqD9THdHfuJq7z+978+ypY/2kEq5Z8NSzO52msXX6YalXFQTzsfriprB6E9txhafh30LB+fg+CdVHCN1Svv547BYPP6viGG0qwjnx7UilO6cr5PCU9k7lL17Jm826++eZUpe9RyIHXYs7Sz0hOV87tra7vzc9ue4rln30WiuHpHjKu0uTY3cPufV+HnOnVfUXkutz8kHJst8nYVbc8THFpSai+zJGLSM3KDalYw2avZ+v+o+p5MNAjlUFDy3w6Nw6aoBzYPXl0z8pj5ofblB+WhE+2HyI1SxG1DHc+Q+esByxuf2paZT3uQjvA6HlQw2IqpYk0ofElz3KX+CVTW6Sx45tS1hcu49ThQ3yydAX7Nm/nzM5NTB3yCnxVxvMJrRg3ZTFnzxocOXKED/58D1+d8LLwnxN5rWcfZj/9GoH1a5nQ7ipOH5ecWfobfC/9CP30Sr58dwZfb97C3g/Xoh9dw4QX78KLxJrs4MyhLylb/2te+mMqmhhgx3uSIZKiIpAZYCklS1w2GQISUwbQMUMmRYtypiwoQ2s0gsZXz0CLz+XvD3yIV0KFBU1bFRLb4nV2H6tAUQ0vJ0p83NnzfTTtaa68oQhLnuHJoQcRjld5IGsee45B0rVFxDWZzqEjx1X8M0sRJb8BSB9RiRNUeRbK2R0DXYIMVIRmPVw1qlTeqHLPshRZfPDBh1g4fwHjx47j089W88brY1i8aBlDhgxh9Mg3eP+tBTz5yACWv/shd/X6G+8u/YBnhgyh+ExZaLpVfFpfyD/Na0j8ABVfIJpcibS+O/93E0EEhBSsan4d5wmTUF8Fq2Zn3vNtYz8/katfnu/rg1WPRb2+i3AdeS4mwZrbs/4+bXU0NjQGtfldBe/XauKqZ2iJC/kOGtbPeuzMq80HqyHhMeoazdC/gS4MHVpJ7Opsf7D8C/XdqwHzlnxGm+59Qr5Rt947jFBsKhl2pE1YPKjMJ3Jp1d1NUvdMktL7smDZWsL4F11ufsgO2eCmbYYnVJeU0n6mFK/W13tC0eOTM9wUFL1n16l2LyrzX07Iz2rf4TPIMD+cynYB0mTz59/a7yuFKvPVhSEHdSklQ+esDcXU6ubJYdnavZR4A3Tz5IVCONz+9IxzTiWsGTX429jqUOylj3ND1B+Y1vUOjm5fx9iRU1n+cj5vLV3N27lLOfjVfvbvOsG7G0rZ/c4avjoMG+Z8wIbjxax6+yNGD53K/n2w+ZONLJ28hJNzZ5MTfSXjcgr5Sj/Dka1bmL3iICcOHuHw7mO8P/VLzny5nkn9U5m2/BRlX3zL6YOgb/Zwzy23ogmPIlQ2S1AGQGV2s0yQuoFoUaiipcuATa6wD1g+wwerjhHbfAxa4jSimr/B18fUodbvvH8E4cjmim4LKJPw+uhVvL3oICXAmOlnEa7XuSZ9EXsPQ0KnfyIS8olvMokmrceixU1ENMtl3d5TBKSOKQ1Myu2AqJKYxjNDzvbSZ8fAMsA0S0OnSmqaVkW9Cl6D6lUQ5eXlDBw4kJ49e/LwwEFs3ryVnPHZfPnVIfr29dA/awCFEyby5uuvUpiby0/TurJwzizu6fkXKkrOAKp+X7BAXVIarPPbHfDuszhEVD2+mQgiUKg1TENdKfw/6FXy1bW9/HvtHruwPFX7VPuus5rNT/UgWPVdaOvIc1EIVpWxrtbu8EW6nu2tNWRHtR2F1Rf2+sxdeJ4Gz2mD+1kPglVX6Ih6b8yoczBrUNlqIroNmNfzzENNeGRoQdjuwExeGD1bLVJA8MBmiXKEDrKVHv1eJSXdTev0vqSku+nRbxSrt+xl/tI1dL/jcUW8bAWrZ9aoyrAKEv7S/7WQWVGZJZWi9fQjdF4AABDWSURBVPv7hlZRIDbt+4Zu7gLb10qFWgg2IUgALdSRJcG2bt17WJ1P6FHhGm4YPInFq/fz8bavGD5ngx2oNMd2aB/PkRPlbPj8KF09tkkxK5fHct+t1/TVSMFMCz/gaPkIceIOHtc681l8M/JTUlgiOpLb4RpWiGReS09jwbU3Map9KhO6/o4Pr7uJpdEaM1uksvHaH7P8mljevcfNqt5/Ij+jK6t/1YaKPzXnrYFtmTwok0+f7c4097W883gas56/nncHp7P11daUv9aY+Q/dzPwh3Vmf8zP0CXGktb8Ph+hHAEPNg31MkAmVv00QLaaCrsxfuqSSMEvY/eVxXNHDcIixPDtiI6BjmhJ374UI55s8M3wvh0shLvY5NDEJ0ehZHI0noblGM/2dk9x9/ycIxz+4c8AqVu8oZ+mn35B89SQcUeMpWvylalIAkAGQAfwmaI0m4wMM6cPCRwU6FfZsK14tEUJUIVbVoet6yIRnGAGOHj0a6lcg4FP+egcPUV7hw2/apNIKgKV80yyJHdxCKmJv6Wo7owW+M0eRK0YSeK0b+tAUXCIWb8RGGEE90cCzCGtYpOvyW+nS5d8+DlbVxakeBKumnZbnJS6157lYCtb5CXIDnN1rW9jrIjjnjN/5v50fJA5WvXbm1TWHFyEOVjVU72fNhKiePlg1pXooqbfcO8wmWL1JTvcwf/HqkPlNrRdGZZwCWwR5YfRskrr3pm2aMgGqI3aUD1ZKunKUT+7uoU1aH94oeDukICHh+dFzSMpw0zrjAVLSK/281m7eDwSVFXXAc5onn3T3ONKycujzqionuIbJsBhdwbYdOR0I+VwFnd+7ZuWQ4R5Dujubrp5gwNEc/vT0dAAK3tlAulspXqlZucz6YEe95q7G8wgtCaZF80aDaRLVj8Gu3/KlprHRpbErSrBLqGCjG4VgfYxgg1Ow0elkixBsjU7kM3EJW52JMDaGQK6AvATId0CehpzgUGcRjolFTopTsa+yY5CFQp1HWCCwxgvMXBV41D9BsOOhKITWA4cYgCnVMS+VxElXCpYEy/ShNZtEmQTJaXQMdKAMC59lUQKMm3KWkRMOcUpK/LIYP5KJ73zOs/kH+e4k+Clj/ZZynh6+nbv7Lsf96DbW7DDR5WnGTCnjuYIv2HUWzsgSvPiZu/w4w7O/YddhkwB+RepMkKaKl+VqPF4RnYBNsiyDEsCUgdA3EiRY4STLMIxzyJbP5wMsdF2v7L99RqU0LXS/Mph6lUiG12eG3pHomJYPKU2lAvqPYyx/nTOjfoLxUmtKhrfk9IgUnE5nzX55EURQA851cq+VMNW1QNeydby+uwirRy+vYcG4kDx1ta9mFaE+BKumMaqH6a2WPBfXB6uWMBsNJgXh41CL8ldHmT94JPd697MhUe/PT+QapFzVWlc9iPv5iKjaxVHLHNWMq37zaIgcXXHzQM6WeQk/GqaS1Fihv0tKyvjtfcNCsa7aZqidg30ez6Znv1dCgUSvvmkQOz7/ptLkJmH0xLdU+IcMtx0Cojd9h2QTqsZG0UfblXplK1Irt31ZTTayqrQtWMfiNXtDzu3BHYe3Pz2d/MWbbPOhejZs9nqQMPPDbergaE8ev35kIt+cLj/PiNWO4Jb9lIRBaKIfv9L+wIqoePYIwUqnYLOIYYWIZUNUIntENB9rgt1CsF5z8Wmi4KMYwQYtgU1RDrZqCazQNLaIlqyPjkd/U8CkKBibCJMTsfIEjGmBLLgEK9cFE6PxFcZRPDEKmdOcigKNJ/94HSI6C4eWhS6tSgdtggRRqTZeKhAt8xWBKVkMpR9D6Wrwrccq24dVugczcBzYB/oyKNuOWbYHrAMY1lHwHQJ9B1IeIMAuyvgcS54C/QB4v8IKfAVyH7ALSr+G774APkfKb8C7EcrWQOleOL0NeXwZFYBoOYGykKeYxIsJFdhmTEWmggRL9afy45BSEggEqoRNCPpjWeGm77CDyi1URH+MCqRUBwkFsJVbqxhObKN41VTOjEyjeMQVnHrlCkpe6kTpiFboL7ckWgh0fyRMQwT1w79kz+mFnEH3v3xmXwQRfG8EYyM1MJnSYMPmXazf9DnrNh7gyLcnbZ8ZtTMNqdtKQ3CLvTpT7oNPVcT2Nml9SMpw0+WmQSqvVDu8gocyn69+SwaUE7ZlUHnInoVpwbETZ9l04Bib9n3Lga9P2qZEvfJAYIwL7nfleTP6OUNpICkhQLPWj+FwDaax6Mljogt7RTyfaoIDQmOjJtghGrFaxLBHc7JDi2GriGe9cLA9VuNTIdjo0pDjXchCgZVzKTLfCVMEgWyBOUmjpFDgy02EolgYJzAmaZhjBRWTBExIgAmC2Q+34c7f9yZKDLFNhP6w/kOIQpgW6NA0cSqUncSYcyWlUxKxprugSMAsAdOTsGYJWCBghhMKYqBIIIsExjx1DRQImBEFc2PwzhPwjp2/0AVvCfwzNcy5AjlNwBwHskigT41CLtSQswRWkQtrThzGvMbIstMkxk9Q9EdaSEsRLcuoVEKBKsfTBMltTaZC5dwv7dAUMvQ/Dqalvn+/HgAzgLSUcmdg4g8YSFmOeeBjKt5+mqMvZ+Ad3g7v0Pb4XrgC78sdMZ9vRfnwq/ju5a44RBRSP3uR/3FG8N+KCMGKIIL/BdRKJvTzJLCs4Jl2FpbpB2mAGbD9VEy1MErT9mtRi/r1tz1l+18p1WzUxMU2+VH1StOqo021t1VafpVQDtOW9Nt1G8q3x/Lbf9vtaVDZgbBr2PicM5bgxaRZ/GCEGIhwuXE26slTWhdWOzXWNRKsEYKdTo2NmsaHTifbhYP1jii2OQXbhWCXSGSniGZFrGCdcLBFCHyFApnjhMIEGOdAThTICQ6MUYLS6Rr+SQKZfSnePAdmdiwbH2tC64QH0ERfop1P4ND6Ky3IQhENK7iRQB32XEYFjmazkPiomBaNnCWQM51YszSY5YCiRrBEo3SGA7mwCXJuc5gnsN6Op6JI4H/bhfG2gLkOAkVOjLeclMzW0N92wiKB9VYMvukOeFvgn+qAhYkEZmuwMBH/XAeBuTH457jwzxeUFqnzBV1Np+FFne/ol6YyWkoz7Gxwq4qCVdNBy1Uc3kNKpyrHMGUoKry0/GBWIM3TYPrhux0Yn42lOOcPlI/4Mfqw1ljDk6l4PomSkdeiP9ce77BWeF/ogP7S5egvtCJaOPBe/H+dEfyXIkKwIojgfwDSCtSYgkQqnFxUeW4qh2Rp+bFMn71IVT5X9wxVjqGIz+gJi+zdhcq0mHHHk2D4AZ/Ki610WUat7QrVb/lVXrOyLcH2IHUwvTax0sPaZYTynq/8msbjnHGpBiug4wUSLxlEU9GfWO1xhPYsrUQvhovL+URrzBZnHDuExiYh2CES2CEEW4WT7cLJ2ljBWtGSlXFO3opxcbd2A1/+sxXkxEJeAhUTBDI7Cu+UBM4UOCE7Bis/BjM3LnTo8/yBHenouheH1p84rR+a8y40MQDdDqKAfVhypUkMyvEhEuaBJfEVasiFAmZHE5jlwLcwHuYJjDmCwLw4Ags0jKJomK+hz9CQ82MJzBcwLwE5UyhCNssFszWYI2C2E4qawOxEmCtggYacI5RyNV/APBfM0ZDTBcyNQp+igQWuxEJ8WBim1/aEAvylWFLtIg2GaahuIgwdEG1ZIdJlGEal+qhXqMClqDhYyq/Ki3XyIMe2v49/wm2cGH4NZcMvRw5NwnyuGfKlNpQMa0fZS1fjfakJ/hFJnPlne/ShyQRGtOPsiLYIVxSBWs6ojCCC6ogQrAgi+B9ASPmxk2X6QoSproTlxzL9NmkxwkiVH9Py2WqDH9PwAjqHjxyly02D7AOdVTT3NZv22eX4bNITLFOVX2eSwTYGsExVT7BtpuGrJH/SDwQJol22UXffakvBsQkRyuqwFBFoGv8UwtEfIQagiX4IMZBW4h7uFj8jX7RlrSORL4Vgn3CyVXOyIiqWzZrgc+FilbiMfzivo4vrtziddxMX8yjjb2vJodxroSgWPVtAjkCOb4SeHYWcIrAKBLtG/JiHf3kjTR134BQPormeRIgHcWoenKI/fimxKFWkwyazegBAx0IiWowH06B4uoDpAqY7oFCDqS6sGQ5lGpzuwJphmwmnC5jmgOkO5EwNprvs33be6S77WvnbmuFATtNgehRyptP+24E1PQamalDYnIOzmoBxksS48crdKrjBwlIR4YN+5KYOLpfrnLAM4SZCC902NyvzsDS8lTv9yk8iv/wY+d6LlGbfwZmX0igbfjnlwztSNrwj5cM74h2mkvrdAd/wjpS/2J6zw7rB8BaUDf0x1nOtKP/nFTTRBAEr4uQeQf0QifsfQQT/KzB9F5YsP9LwKrOK7gXDB2aFncqU2dD0gulj1MRFobMGkzMyGfrGbLDK1TuGMtEoMla/NpmGKlflVaRHPVP1S8MLlhfMMvuq7ltWRQP7WVEthT2rDgleo5zk5k/hcP0d4fgbIvpeRLQbp9ON0P6PFtpf6Ob6LXdHX8cLcR3IjmvGmPjWjHB04G4tjR/H/BlHTCZCexCHyKSJ6E20GEDHRrdyf/efkJfZjqWD2/DJY1fw4YArmX13S26+4nYuv+QvRIlMhHgY4XgI4eqDw3kfCVH34xR/xyvBkvb4Gj4sU+2oKw+Ugd9HVNuxHDMBvlZCDypoKrJy510wIAY1KjVhmw7OcYMyquRRfEkP3TPQFRH2nwVOc0JaNE2aRED6Qm5j6sicEsXbLbWpQdM0AgGlJAaJldopGFS1TJtoB9DLTnP61DH46AlKZt7DN6N+ybcvXknxyx3RX2yFMaIZ5tBE/EPb4R/eHt/wZLzD2+Eb2hHfsBR8wzviG9YBa1gKp4Z1wnz1Mo6OaEvp6Kv44pVridOE+gYjiKAeiBCsCCL4X4ZRoZJefu5VL0ca5Vh6iSIwZlnofui94D0zoMiXWQZGBaZZDkYpUvdh2H9j+rB0m8D8ENC9aneYUYo0SkNtuaAUPg7VIC0DC0mMs68iO44sYsXDxIvBRIuHEWIAwvEgmhiIcGQSpT1AtHY/sSKTRNGHKNEXIQbgEA/TWDxBtOtRhHgQoT2K0AbiEg8Tpz2CQ+uPEPcjovqjiQE4owYiRF+EGEhC1GCitftxifuIFgMR4jHiYv+EboCkDKMCm7EoJ++AfeBzXPJ0xKWziGo0FtFyMuLS0cS2zENcmo+zRQ7ikmy0FtlozXIQzXMQLXIRzbLRWuQimueErqJZnrrWkLQW2Xbecer94LuXjkJcMpO4RvOJjZ1FfNJ4Lmk+i4CuHNNlwAK/haQCaQESTFNH0zSioqIQQoSuDocjZNHQ7BRj33cJQbQWhSYEDqHhFAKnU0M4BEITCOFAEw5EMGnqvha8CkGCJhAOQYLQ0BwxxAlBYyHQYpvVFHo2gghqRIRgRRBBBBE0AKbhA05ihEIJKF2nGBVhQEoZ2sAYvBqmBB/4LSgH9GDsMSBgqt8V0sBAOWXrRgVQDLJCuVMFQMcbMqOZRgACXpA+DEy8QEUFWAQoC5wGSypiFbDPJsSPZZVQLJUJzpJ+FZ7AUM1QoQqs0M67mo6jqapOWeFh085J4SFAwiPmBwhgIamQBj4ClJaDJQPqCB3ThySAFxOvBN0fsDdZVPOzCmufZVkYwV2ptlomCfrNWaqdUipFzLCd5M3wNirVrYpqZ5noAVREd90+wMdUf3t1Kzh5EURwXkQIVgQRRBBBBBFEEMFFRoRgRRBBBBFEEEEEEVxk/D+ddGWFyz7YFAAAAABJRU5ErkJggg==';

var endwrite =
'<div id="' + radid_top + '" style="position:absolute; top:0px; left:0px;">'+
'</div>'+
'<div id="' + radid_bottom + '" style="position:absolute; padding:5px 10px 5px 10px; background-color:#FFFFFF; border-top:1px solid #000000;">'+
'<img style="display:inline-block; vertical-align:bottom; cursor:hand; cursor:pointer;" onclick="gotourl(\'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7HUE6B3854TK4\');" src="' + bottom_img + '" alt="" />'+
'</div>'+
'<script type="text/javascript" id="stcntr"></script>'+
'<script type="text/javascript">setTimeout(\'loadmenu(\\\'close\\\')\',100);</script>';

var firstload = 'yes';
var windo = '<a target="_self" class="nav" onMouseover="this.className=\'navhover\'" onMouseout="this.className=\'nav\'" href="';
var windochk = '';

function windotargt(){
if(document.getElementById('newwin').checked == true){
windo = '<a target="_blank" class="nav" onMouseover="this.className=\'navhover\'" onMouseout="this.className=\'nav\'" href="';
windochk = 'CHECKED';
} else {
windo = '<a target="_self" class="nav" onMouseover="this.className=\'navhover\'" onMouseout="this.className=\'nav\'" href="';
windochk = '';}}

function loadmenu(menuf){
var tlespn = '"><span style="padding-left:10px;">';
var endspn = '</span></a>';
if(firstload == 'no'){
if(menuf == 'open'){
document.getElementById('menu').style.zIndex = '2';
document.getElementById('menu').style.width = '300px';
document.getElementById('menu').style.height = '100%';
document.getElementById('menu').innerHTML =
'<div style="padding:10px 0px 0px 10px;"><input type="button" style="margin-top:0px;" value="Close Tool Index" onClick="loadmenu(\'close\');" /></div>'+
'<div style="padding:3px 0px 0px 10px;"><input type="checkbox" id="newwin" onClick="windotargt(); setTimeout(\'loadmenu(&#092;&#039;open&#092;&#039;)\',100);" ' + windochk + ' /> Open tools in new window.</div>'+
windo + '/' + tlespn + 'Homepage | Descriptive Index' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Basic Text Tools:</div>'+
windo + 'Add-Prefix-Suffix-to-Text.html' + tlespn + 'Add Prefix/Suffix into Line' + endspn +
windo + 'Add-Remove-Line-Breaks.html' + tlespn + 'Add/Remove Line Breaks' + endspn +
windo + 'Count-Text.html' + tlespn + 'Count Characters, Words...Lines' + endspn +
windo + 'Delimited-Column-Extractor.html' + tlespn + 'Delimited Column Extractor' + endspn +
windo + 'Find-and-Replace-Text.html' + tlespn + 'Find and Replace Text' + endspn +
windo + 'Letter-Case-Converter.html' + tlespn + 'Letter Case Converter' + endspn +
windo + 'Merge-Text-Line-by-Line.html' + tlespn + 'Merge Text (Line by Line)' + endspn +
windo + 'Remove-Duplicate-Lines.html' + tlespn + 'Remove Duplicate Lines' + endspn +
windo + 'Remove-Empty-Lines.html' + tlespn + 'Remove Empty Lines' + endspn +
windo + 'Remove-Extra-Spaces.html' + tlespn + 'Remove Extra Spaces' + endspn +
windo + 'Remove-Letter-Accents.html' + tlespn + 'Remove Letter Accents' + endspn +
windo + 'Remove-Lines-Containing.html' + tlespn + 'Remove Lines Containing...' + endspn +
windo + 'Sort-Text-Lines.html' + tlespn + 'Sort Text Lines' + endspn +
windo + 'Hand-Sort-Text-Lines.html' + tlespn + 'Sort Text Lines by Hand' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Format Tools:</div>'+
windo + 'ASCII-to-Unicode-Converter.html' + tlespn + 'ASCII to Unicode Converter' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Obfuscation Tools:</div>'+
windo + 'Binary-Code-Translator.html' + tlespn + 'Binary Code Translator' + endspn +
windo + 'Encryption-Generator.html' + tlespn + 'Encryption Generator' + endspn +
windo + 'Reverse-Text-Generator.html' + tlespn + 'Reverse Text Generator' + endspn +
windo + 'Word-Scrambler.html' + tlespn + 'Word Scrambler/Descrambler' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Randomization Tools:</div>'+
windo + 'Random-Line-Picker.html' + tlespn + 'Random Line Picker' + endspn +
windo + 'Random-Number-Generator.html' + tlespn + 'Random Number Generator' + endspn +
windo + 'Random-String-Generator.html' + tlespn + 'Random String Generator' + endspn +
windo + 'String-Randomizer.html' + tlespn + 'String Randomizer' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Combination / Permutation:</div>'+
windo + 'Combination-Generator.html' + tlespn + 'Combination Generator' + endspn +
windo + 'Line-Combination-Generator.html' + tlespn + 'Line Combination Generator' + endspn +
windo + 'Permutation-Generator.html' + tlespn + 'Permutation Generator' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Numeration Tools:</div>'+
windo + 'Generate-List-of-Numbers.html' + tlespn + 'Generate List of Numbers' + endspn +
windo + 'Number-Each-Line.html' + tlespn + 'Number Each Line' + endspn +
windo + 'Online-Tally-Counter.html' + tlespn + 'Online Tally Counter' + endspn +
'<div style="padding:2px 0px 2px 10px; font-size:18px; font-weight:bold; font-style:italic;">Speciality Tools:</div>'+
windo + 'Index-of-Speciality-Tools.html' + tlespn + 'Index of Speciality Tools' + endspn +
'<div style="padding:7px 0px 7px 10px;"><input type="button" style="margin-top:0px;" value="Close Tool Index" onClick="loadmenu(\'close\');" /></div>';
resizepage();
} else {
document.getElementById('menu').style.zIndex = '-1';
document.getElementById('menu').style.width = '0px';
document.getElementById('menu').style.height = '0%';
document.getElementById('menu').innerHTML = '';}}
if(firstload == 'yes'){
if(window.location.pathname == '/' || window.location.pathname == '/Index-of-Speciality-Tools.html'){
} else {
document.getElementById('footer').innerHTML =
'<footer>'+
'<div style="line-height:1.2;">'+
'Tools provided as-is, without warranty of any kind and used at your own risk. &copy;2014 <a href="http://textmechanic.com" style="color:#0000FF;">TextMechanic.com</a>'+
' | <span style="color:#0000FF; text-decoration:underline; cursor:pointer;" onclick="privacy_policy();">Privacy</span>'+
'</div>'+
'</footer>';
firstload = 'no';
setTimeout('resizepage();',150);}}

window.onresize = resizepage;

function resizepage(){
var client_width = document.body.parentNode.clientWidth;
var client_height = document.body.parentNode.clientHeight;
var top_height = document.getElementById(radid_top).offsetHeight;
var bottom_height = document.getElementById(radid_bottom).offsetHeight;
client_height = (client_height - top_height) - bottom_height;
if(client_width <= 620){
document.getElementById('tool').style.width = '620px';
document.getElementById(radid_top).style.width = '620px';
document.getElementById(radid_bottom).style.width = '620px';
} else {
document.getElementById('tool').style.width = '100%';
document.getElementById(radid_top).style.width = '100%';
document.getElementById(radid_bottom).style.width = '100%';}
document.getElementById('menu').style.top = top_height + 'px';
document.getElementById('tool').style.top = top_height + 'px';
document.getElementById('menu').style.height = client_height + 'px';
document.getElementById('tool').style.height = client_height + 'px';
document.getElementById(radid_bottom).style.top = (client_height + top_height) + 'px';
if(autohgt == 'yes'){
var topdivhgt = document.getElementById('topdiv').offsetHeight;
var btmdivhgt = document.getElementById('btmdiv').offsetHeight;
var middivhgt = ((client_height - 20) - topdivhgt) - btmdivhgt;
if(middivhgt > 120) document.getElementById('middiv').style.height = middivhgt + 'px';
else document.getElementById('middiv').style.height = '120px';}
if(typeof specialonsizefunction == 'function') specialonsizefunction();}

function privacy_policy(){
var text =
'~ TextMechanic.com Privacy Policy ~\n\n'+
'Log Files: The TextMechanic.com webserver records log files as required by United States law. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring page.\n\n'+
'Cookies: TextMechanic.com and it\'s partners use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.\n\n'+
'Tools: All tool are built-with and functions-in Client Side JavaScripting, so only your computer will see or process your data input/output. Input/processing/output data is never transmitted over the internet and always resides within your computer. However, cloud operating systems could transmit your data into the cloud\'s system for processing but this has nothing to do with the TextMechanic.com webserver.\n\n'+
'Sensitive Data Disclaimer: Don\'t trust any website with sensitive data, not even TextMechanic.com. Keep your sensitive data secure by keeping it to yourself.';
alert(text);}
