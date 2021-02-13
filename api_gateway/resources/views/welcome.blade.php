@extends('template.layouts.wrapper')

@section('content')
    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <div class="navbar-brand-box"><a class="logo logo-dark" href="/"><span class="logo-sm"><img
                                src="/static/media/logo.a0143fa8.svg" alt="" height="22"></span><span
                            class="logo-lg"><img
                                src="data:image/png;base64,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"
                                alt="" height="17"></span></a><a class="logo logo-light" href="/"><span class="logo-sm"><img
                                src="/static/media/logo-light.96c274da.svg" alt="" height="22"></span><span
                            class="logo-lg"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABVoAAAEsCAMAAAAFLfgaAAAAmVBMVEVHcEz6/f/3/P/////5/P/////8/v/////////////////////s9v/4/P/////s9v/s9v/s9v/s9v/W7vfs9v/s9v/s9v/////s9v/////s9v/s9v/s9v/s9v/s9v8DqLXs9v/s9v/s9v/s9v/s9v8DqLXs9v8DqLUDqLUDqLUDqLUDqLUDqLUDqLUDqLUDqLXs9v////8DqLX3TEEvAAAAMHRSTlMAH3GfEO9hQH+/zzDNUd+P8foJA8DaGK+aj4LouK9JbaY8XDUmwi0OpNkwi17tG0QYgRLwAAAkHElEQVR42u3d6VbjyLIFYM2DZQkbY4wwUBTzXDLv/3AHqO4+VAFYEZkZmSntvc66909ju2TpcyhyUBBI5e7Hj/vHx8fbHz9+BQiCIIh6Fg+3j8//5fbHNQ4JgiCIYh5un//M7Y8nHBUEQRCFXN88f8ztnZ4XTy5egmOMIMjoZL18/jT36qzmOzvL7iV7OzsXuzjSCIJAVmVbk8NZ9//Ml9kCBxtBkNHLqmhrtu7+yvIchxtBkFFkcfP8TfhjWclR9zGzAxSuCIKMIXeP39F6y6Vwf9p9mlPYiiDI2IvW5+cHpqzL7ouc4pgjCDL8ovV7WZ9vWS2Br2rWN1sxUwBBkJEXrc/PnNmt38nadREOO4Igw871Nlmfb+gvmnwra7dOcNwRBBl0fmyl9VJzzfqSQxx3BEEGna39APp6162ydut9HHgEQYac+620PhN3GNwuK8pWBEFAK43WPrJ2Uxx4BEEGnIVuWpM+snZTdAQQBEHVqlnWrqtx5BEEQdWqsxvwmhMcegRBULVqlhW0IgiCqlW7rKAVQZBBZ/u81se+81qT/rKCVgRBBh19q7EosoJWBEEGHW17COxTZMUMAQRBhk2rpp2vaLIu8YRXBEFG3RHot18rTdZuD8cdQZBhl62P39P6o8+LJDRZuwMcdwRBhp2H7+cHXBuQdRbisCMIMvBcqnZaqbJ2OzjoCIIMPU+3X8t63+Pv96mydihaEQQZs619Jl7RZT3DIUcQZAS5vuXLSu4GYHoAgiBjtvWxTzeALusUDx1EEGQstv54ZD0TC7IiCIJ8mcVfuD7ePvT5s33IiiAI8q2u17/ub/7pBNw/LSArgiCIpjy9ped/bLQbEJ5hdywEQUYYY7KeZ9PpdN110+m0vsJxRhAEsqrLen70/m/mRxl6CAiCQFY1Wavjj383lh0I8/+C5Woufzs5DgZiLoZGsKr1J385j4Z8xdZFUZaTzceU5aoo6hxFu01OiyIuy+aTbyd9+3rALOJHzXow+/yPB2lrlbVluumRMi4ArPD5nb+Q2uvL+f314DYDcVvWL/98YLYmdVtuaGlWhfkKKScksfnmBm/OX1RdNRtq0rKoEze+GIls/SkJHf5skHWotlbFZMNMaZhXymfR/Uky1hGJdf/ksb+bl0xaU7xuHEux7QMXDn82Tdndrw/+Sb3vr6yD2Yiwjhu1EyddGZwyYZHWioeZxmNRRaWGC3tSVKB1BLQusun83XDQTmhJ1n1lWQexjqtqGy0njzFd7dGapKzfmdC1r+atdxPXoHXgtJ79jeBs58KGrOo160sy32HNJhrPn1U9LFp5x6Zyz9V/zG8r0DpcWi92PntM9Ymnsnq+zWtSpJrPoKYIh0NrzDoEWn5tE60/ee++nygBrcOk9Xxm4sFU1mTtZh6veQ1jIydRnA+EVntDWFWcmrvI9X0/oNUhWs/XJh76Z09Wj5/7krTGTqOyHgKtzCEsDaSXhi/zSQZah0br17Kq2GpnBOvfl/JU1iI1eSI1mfe0MoewlO+3s0bgQm+0DDmCVmdordbf3Vpf+Cirp7Tmxq/fSe45raxeZ1r5AOvbJy0S0DoYWqvZd0bNl0xZ9+x1AzylNYklTqay8plWXrsk8wTWN1wz0DoQWs9nW5Ridehs9lnfJjfseydrLnUBt4m3tPKGsFo/vhddbRvQ6gatW2Xtprv+ydrNa99kbQULo9pTWitWo7VUesvSwgWvdmcBWp2g9bsRLP6yUbt9Vh8bAslE9IxaJT7SmrDqx0bh35q0li55lTsL0OoCrVc9ZKVPErAvq2+0VqnwKZXmHtLKKiBVhrDqxto1r3BnAVodoLXqI2t3ROwIWB7B+t1r9UrWLPXwpBKnlVdB8olKVlZFKkPQ6i2t2/usv0Nb2rQ7tS9rd+yVrFbOKtWmgDStmfC1U6eWSeIWrqDVOq3n655Okaa2Ji7I2v2ErFujuMmeMK28nsmKXbLGDqDE+/UDrbZp7S0riVYH+qyvEwRyyNpjgKfyh1beEBb716NqnFCJ9Q2BVsu0XvWWlUIro89qQNZubwFZDQ/xCNPKG8IKPfxS/kwEWn2jteovK4FWR2T1qB9g9yJWsVWUVt4QFvNtnWgG/Js4Aa1e0VrNOgO0ujA3wK+itbJ82ivYKkkr7weI+Yw04TnGW5saIWj1iNbzNUWqvjMEnJgb0HXdzJuiNbQ9Cq3wWBNBWnlDWLHkmzn08wdaLdJKk3Wv5y2JGyNYXbc+90VWF+oj9kiPHK2iQ1i1a7KSd2wBrfZorUiydgdWZd2hvqpHD8ZyoqdXOk8rbwiLJ2u2cTEZaPWC1iuarPN+36uhESy6rMe7vshaOzJQ4jitvCGsakCy0mwFrbZoJdasXZcYktVIn7U79mYIK0k9vG7lac0E/03FxtW0oNV5Ws+psp72qQJ3IavMfa470wSEaJUcwoo37iYGrY7TSpZ13Wd+gCsjWD7JWrtz8k/cpZU5hDWwmpVUt4JWK7SSuwG9no3qTp/VH1mT1MfLVpxWVmnP26I127idDLQ6TOsVWdY+7QC6rEtDsgb+xK0SKXeUVtYQFq/B4bqsvW0FrRZoZciKmtVMQrdO/4mbtNYmCfJN1r7/MNAqT+u5EVkxgjWEEZPCRVp5Q1it3Fs5Od4IWsVprVCzomj98qpN3KOVt1iNtUVr6IOsPZclg1ZpWiHrYIrWZlVk+bsKJs+jolTEIXaPVtYDVFjrWx3bkUXtXwdahWl1pc+KESy16QGTtv7i8gqzWGUD59A1WllXHG8IK974khi0ukYrRrBcSsQtV4stAFZtavCiFaWVN4RVS34dNhKBVrdovZp5NII1eFkDXnVZ9hIq45auoVO08saVWJdKvvEpOWh1iVb0WZ1KZQ5WBVxjl2jldT9Z61t1L95oyrIt/k1blpr7uFsHHEGrIK3oBrgVxkR42pOTC5YWoUO0yg1h8d7q0++obLP8s4+Q5JnyMGP/KRAlOZSf4gn51TOttJZakw1E1iVk5fYDqI9NDifGf8KN0sobwmI9MUFPozWNs20DaIrDjJR2q8GjbeBZyaQv26kLGbJ63w9gXEyMQe/GGVp5Q1isq17HjNZJ0XdeQhhpaA/wH7oDWm3L2gMrjGAJzg+QWrlZO0IrbwiLV8wpb+3YtDTpwki5di1BK2RFn1XD1cxsCNFtXblBq+AQlnI7oOTM9spV59FGoBXdAMiqPITLHsWk25o4QStvCIt1iBTbATH31jxsld5Yc0sAtKLPOghZc7G7P/JgUOYCrbwhLN5TBldWYH27hpSmHK1AK2SFrIr3oCrX78rgFWuKVt4QFu8pgypPeihVK8dQpS2Qg1b0WSHrX6FdUbHKW5Eff2KfVt4QFrMdzR9QamoNZ0LOny7QgFbIarvPenF1evyaw4t9N76WUqxopa/hrG3TyhvCagWu6T/fMLGgit51RKAVI1gqsiaHp///i9lO7UKdK9pUi40ZZYZWVvOT2Y5mr3Bt9PlScQvXNAGt6LPak/Xk72OwV1v/XhJzU03V+ZhYppVVxTWJyM8Oe2nc92mZnyIGrZZy4cjTWizKuns8//iHke22AO0ePRE9bynvZ4JW1h5UvC1a+U960L3ONGMWzyFoxQiWHVnPlvxP5Aqt6utuiGVrbZPWUHIIi1m0pvptqRrLZStoxQjWf7L2eIT3mZL25kI6kVrh90szi7TyhrC44zm8orWpDJwSzOfHhKAVsrokazdfht7QquHms3dvN11FFDf008oqI9njfKx3myRGzomktFq2glaMYBG6Ac4+SKvYCJ/IsX5WjdAaiVoXOiQrF/oQtGIEyylZu3k2Jlpr/ayaoFV0CItnmTlZeZ8nBq0YwXJK1q5bJ/a+nlKa1iDVzqoBWnlDWOy5aYljsvJsTUCrZKqBy7qrLmvXRZ7QavKibeJM5Y5SL628kZxI5nKWkJW1c2wBWiWzN2hZj7TI2i3HVLVm2lnVTyur16hwQ0yf75SavtNh/Lo0oFUwh46MYIVGZNVTs3bd7HxEtCbaWdVOq+wQFmcr27QyfmYwFt5moFUs+2s3RrDMyHq00COrzY7ASuaO930mulnVTStvCCsU+n3TiNiWXh75U5Wg1dmi1a9uQI8PW/d7qR1r31AhdMv7Lq1uVjXTyhvCUigj6TOvWpFzg15Mh6BVKmuMYPXK3A9aU01XrGZW9dLKG8LKlH9rKL0HF29ptA1kgdYeOZnp3+TEpxGsuu+LzfygdaNlp67ExPIzfbRKD2HRB7FSqfV75L3LG9DqZD/AUM0aWpP1rHOfVtpNXxm4Gm208oawVD46ubUr15nPBdsioNVYP6DPek+vRrDqzgNaiRdPPnRaeUNYSjOhqGWy5O9bK1m9g9b+maEb4DqtxGHgJhk2rawhLMWZUNS3lNzOhzoDKwWtztE6vBGsOeVz+mHSRutu8g7SKj+ERa+TC9HjSp0lkINWx2gdXs1KkdXmSlcqJtGQaWUNYSnOhGrdvm8oRQ8GaNVN6/F4R7DeYnHvq5VsjeY0rawhLNXWZ+P24ScW1Q1odYpWv0awNPdZu65b79ozic5JMVRaK46sqlVkKE6X2bI1BK0SmWusWY9MyLo4pMu60C5rd2TRJMaQeJwMktbEwhAW+actc/0EiUCrRHbQZ+21FuunTZQYoEyqIdLKGsJSXkSxcrxopZatK9AqcrMJWV0vWhnN1remQDI4WllDWIXoB7cziFjTynjQKpHz2QhHsGryq55bRSnjkLJpsoHRyjoM6iUa7XY7tfKLRhtoy0GrRJYOy8rpsxqRNVpYRYn3mObNZlIPiVbWEJaGnf5pezjYmVUcyRbyoLVXReTuCFbgxgiW1TmtCj1G1ypXRVp5Q1ga1kXR2jF2etyJbCUPWnt9KUsrsnrUZ7UvK7Mj8BvXIhwGrayfFx3XNYn0iaWDS/I/Ba0i+X65J2R1QFbW40TfFSn1AGhlDWHp+OpC8Xc0P5AVglaRnI6qz+qjrExY3pUpceU5ray6PfYPLZnaugatItmfujg3wJkRLCcqvnyjmqatPKbV1hAW9TqeWDu6pB/fArRathUjWN2hI43KyWbju64KtPKGsPRMgyolzRJqx5egVaqVdzwAWYfbDVAcyHJFVwVaWT8smv6lqYX3NN2OT0Gr3FjWx6cNLM+sjWChz/oxzUZTmrh2n1YNyTwkS+y+JgGtYtmN/sR1fdDrr1CzSqXWqE4aZ8nQadU1dZ/U5V5ZPEHajZx3oJX28xydzudv+sznB9kuZHWmz8ro+fVot0XhkGnVNp5E6sTY/C2uBUt60Eoez9oPD05PT/b3g2AxOFk7n2vWgDlIvqXxmg+VVn0b/Rcbu4yY6VwU46G10BHlf8Tij/+HmtWtFAYISuM6GSCtqb7hpJU3FRKl2boaD61aIjvzw9AaLPRZpVoC/11mQo1X/4awqAe9tHp6rOQ+KWh1TFbUrIq3fKmpM2ci0XiVuxBajZ+acsztPkuXAk4KWp2lFbIOot0qqavYdbCy9ant3umQ5jKAVldpHfgIlpuyals4YEdXsckBOvsbpM1ZcqsnB+mjhqDVTVpRsw7S1heWDPZd/RvCopaClrdvlPsVAK2QdWCymrd1s4lzv2nVu9ZM8C5bORPQ6jutCWQdsq2bJkr8pVXzRUB5Mkpj+dSgTGaIQKuLtB46IuveCGUNgjwVOJVMlK4i10Bs8SouLZ8ZsZgVoNVMfs6osl7Yk7UbmqxBUE0kTqZGe9fVuyEs32gtQKvftJK3vkY3QHdDphQ5ndI29I3WNPSXK9A6elpzyGo9rdAZFYd+0ar/Ml55RCtlg5YVaHWOVmrR2kvWCLISr6LUP1zNf1gDTwYvPaKVMpuhBK3O0frTgKzhEiNYxISTjW+4ejeERaU1A62gVYzWXiNY+yZkXZwMWVbR86tI/KC1sExrDlpBq0JIc1rXvSqeQ9SsnFRihWtae0GriasYtIJWKVqnursBQbJGn9X1U6wMfaBV/wQBr2gNQetYaO0nK7loRc36/4tp5VHhKjGtddS0BqB1JLT2lHWx1i/ryThkfb0JLKXOrlXiPq1ad2oFraDVTVp7jWC94jCDrF7g2lTu07qpQStoHTit656yBjuYG+ALrpH7tOrdUtAvWhPQOgZal71HFA5Rs6r3XGOZJQRx4jqtuncRwAwB0CpF61KzrCRaIeuXFUvUiMAVuk6r5oUDoBW0StEaaZY1mUJWPaklpgso3HBLXQaZLVpr0ApaFXKucQTr7V4WsurrCxSNw3KJzROrLNGKPQRAq0p6bM+yJsgaLHYgq87SNXbWVrHroElAK2j1j9btI/qUmpXQa4WsPTss2cRNW+UuhJWdqxj7tYJWpezPtPVZKbRCVkJjIJo4aKvglRBZuYpXoBW0GixbqbL2pHUvgazu6Jo5Tqu+69mnB7i0oNVzWr99oCuxG/D6cjPI6p2uueO0pomFq3hi+QvHE119pzXY/RLD+Zosa7A4QjfAO105e0yJXgu6KkjK0NDGI1pz0OoircGZlrkB/yaDrEZHtYxMd504Tquui4FEa2L3q96AVu9pDc6Wevqsv0urGWQ1q2ttYB1s6zitmibwVxu7ilC+ZspHrUCrm7QGu0efUDZlroKM5uizmk7d6l5NkDtOq6Z9se1MTHC8dwFaTebk71pzmi24r7UHWQVSFVobrxOTSE3KP9KIfEDlT91a/X4j0DoMWoPk8Pg9rGe7/Je6WqMb4N+wVmQQqb+ux4RlqxbpKGNDdmdftXKfFLQazSIIrqrjo7ecXO0qvdbFGrJ6N6xFneCk0m2oWJ8wE6Y1tfrNlqB1ILRqzRe2zjPI6q6uhRytvKtJx0YtpDcObX6tglSAVp9s/XRvwT6jvJDVlq7EslVtjIz1JAUN+2JH0mUyN6RRrGg8tOJiD84+4Hp8Almd7rsWgrQmrPljsaxYscXvM9rIeQdavcpi/+A9ruuDXt8JZFVI1arNd20EaaUZp6+OTMwdEL0h3YYkoHVc2b04OHoZGHv93/l+AFkFkilNd60FaSWNgOuaG/8S0q+PxWYrqZUTgFYEsjqM60qS1oDVwFDeF7sULZJlGhclaEUgq/kU/LZAKElrmBrnX7VYtrdlK+ljtqAVgawCCUsurZEkrUEmsrRB6U2t7dDSSBbXoBWyQtZ+iZiF60SU1oD34C+1i5u2WsFWR4D2KSvQikBWoUtzYrwjoEHDhPUpFffFTn3oCJD6AWkAWhELst79unzLr7vFiI5nEpu+29ZRaPIWvKqN2pQ+dARSueMBWjm5fnq4ecuvp8U4ZX26uXz+L5c3T2NqChhWS8s9POtDqq1TLEz91mhMLbtsE7QSc3d/+46V+6fxyXp9//xXxoRrzWm4CtMa8BboquyLTVurYGfVAK2yzkGrLKw3f6ny6C6uhmR9uHz+kNuHETVcGbbmwrTyFrwq7Ystpzg3oamfQ9CqnsXD4yesPI1K1h/Pn+YHbNVyc6kJbN6CV5V9sWkloY1NW2PhTwhaCbLefKrK4z1kha2ahsR11cK8LeUUdk6JNrK32+QktA8YgVbrsr5E1db9i4vs+Pjg4iLxVlb1g+BRMnPloDaeeAsc+DNOidMS5MtW4o9NBVrFcn3zNSsqJdviZOe/La6XO4d6dD2ZScs6qrqVPAdLnlbegleFfbEbt8tW4vFoAtAqlu9YeeT3W+u/Hie4jjTM6JKvWV+bzteu38hHupYBkYeJKnFaiVON/quvE6GfG+myNRZrjYBWYm159/gdK5fcVsAnz2k9/ikv6466rG6XrXlRprqeX8poCeTytDL3F2SbQqVcdpJAJf/pQGtPWi+/Z+UX61V/fvpElvmJl7K6WraGWTvRfgoRb38jC7Ty9hfkj98QK/lGdEkWsfWcBqBVKr+2sMIpWxfRF9LNa1lZD7XI6mLZWkWrRu/gBK9sLWzQWvG2k+EeI2oDWvIpddlGvB8AWvUUrayyNfrSOpW61cYI1r9lq0uqJnlRmrsLTTyglbm/ILecrKUMF+iN16BVrNO6lZV7jbKq2JrP7HQDnKI1zOLP74ZbbW+x8oBW5oJX7sZU1CcxTMTOB+pxaALQKpXttD5ea5S16/Z2mbLO7cnqRkcgj1apwNVMmyZZ2qE14T13hnmr3m4cbQmQq/cWtIpVrTfbWbnWKWtP8TT0WXXKapvWpC62DVdoGzvJfaCVub8g80oPhd6H3HAn95xD0CqW2+2s3GmVtZtd+CerTVqrLO5Tomnb4D70glbm/oLMfbHJUxJSiYe70rcGnwSgVSyX21m50Spr1zG6rSczu7LaojUvVn0Lk1jbm/pBK3PBK29CP33YbCIwA4vecM5Aq7e09pC12/NqBMsarXVLwiMdG628/QWZ3Ub6e8XGTxD6yok0AK1O0XqvV9ZuSb1Zyue2ZbVBa2qlIqHS2lqjlbm/IG/6EWO/LdO2MiagFaDV16o16gdf7Z2sNmgtRW51VWkt7NHKXPDKaoOGjDfKXJN1E4JWt2i90ywrsdlqvc/6GgsPGygsXTj+0Mpc8Moay4kds5UjaxyAVsHc6pt81VfW7syvPqulJQOZpSsn94dW3v6CrAPFKVsN2spajhaCVsncb18y8KRZ1m7pm6xWaA0tXTq5GT2MzArl7S/IIq90yVaWrGUAWiWjbaFrf1kptLoh67OVhw+mdspWWiMit0or6z6dty92LlYgG5JVn3KgtVeuL/WwQpC16/9b7sIIlrVNBVd2Lh7a21Z2aU2Y7VbGrFPePNrYwPxW3u9JGYBWtzoCl9pl7T+M5UjNaqdoZaw30rLYhlYsB3Zp5e4vyKgmmUtrJ7rXZSW8rWk2IWgVztOjhj0FSbL2nnx14oisl3Z2wmaMnGiYuEgTpLFNK3PBK2dfbF6xuEn16lLxNqbR2ZoArVrK1nv9svbdV9CVmvX5ydI3w7iI1M/k1tBdprF/BbOIqyR+6rTO1Ff5JdFZtILWnll8223tNT2AJms3Xfgl64Otr4YxJT5Vbe0Rl4+29mll7i/I2Be74LI20bU3dli6wDto7T2S9XVL4PFOv6zdgU8jWBZlZXX3VLcFIfKR2aeVu+B1ZfpnR79sEfsDpAlotZEHUVlnvW5NDNWs14/+yMrqCLB30ufpUTlAK7eapHOXsWndNOrG5CX/7bMAtFrJr0s5WfsRaEjWPut63ZGVt0g+FnxHwlZKJjvGTHPol70CbptSrSsQxirvHYBWWz2Bz8i5NSJrF1qU9ZdXsjLn+6z4N3+1uRLZpHnMO3X6XXK1UUkc2oFV6xgWaCUXrn/fKd/+uDYia58NBH4akvX60itZ2fuPcG0lTxKN3KCVu+B1Yvay/qR65ElTqcGq+1FdoJWUxdMfXYF+sNJlnfeS1cwI1gutnsnKbe4xp1IafdSS2Tt13v6CjH2xJ2rIbZqI+ruXZKrvOQlAq+Xc3V3+zsNdv0ny9Jq1zxMGTHUD+uxF45asnN3t+XUKXVbKo5cNz85l8kPeF7vaKGeVEXSt41T5DSvQar1yJf73dFmniU1ZgxvfZFWYSkm/qU6NFn2GaWUueKXvi11sNGQV9eEuzFY63qwIQKtn8U5WWtXqgqwqUylpG4MkreFyyPSaMmbvhN6Xnmy0JF0V+dfvneTRqtHzRpNgzLQWWpP7LOtPg7I+UUaxfrjx+6VQJKVFfzYyznVM6QcYp5W7xJ88Vy1MN9qSlnER5fn/f6KqPM+KuNT5FuGoadWbArJ+0Uv2T1aVsnWzSXtO92FORo+copW54JU+m77e+JQ6AK1+0epfN4BEqyuyKp9Ik61jJknGvfNMnKKVO8JE3xe79UjWNgCtftHqo6wEWt2RVa1s/T2Z8psxk0RhpIR2K22eVu6uUNbarQKZBKDVL1q9lLX/igGHZFVauP6up1dk+ceRkljJiNA1WrnrUFfyP3dCSRPQ6hetDFn3LfdZKTMEnJJVbeH6XzVMWZavA52rslQvvIggSdDKJY+8L3blh61pFYBWr2ily3qQuCBrz3mtjsmqY5a6ieTu0crdX5A+qT7zglZDD5QFre7IetZjNYKArP2ara7JavVc0jdpSYRW7qGi74udjVdW0OqSrE7UrEFwfeujrG4Om4RO0so9VPRd92LnZY0D0OoVrR7L2qfZ6qKsWmep25rUI0Qr91AVg7PVmKygFbJ+zK9HH2V1cJY6fehZiFb2ocoHZqs5WUErZP0kP7yU1b1Z6vQ1PlK0cg8VY55SPE5ZQatHss6lZN0ytdVZWXXOwNIRxgO4xGhNmO1Wxuz6eJSyglbUrNRJAg7LygbDSBgPmpajlT3ptB2OrUZlBa2Q9dM8eCmrW0NZnOtFjlbuglfOTibxCGUFrZCVZqvbsrq0AigK3KY1YO6LwNl/L3JQ1igArV7ROhBZX2z9rN96+RAEsNVgTSRJK3d/Qc7zGt1bO5AFoNUrWgcjaxAsPi54vbkOAtjaK8xn2kvSyl4bHHv8i/dv6V0FoNUnWheZI7IeaPnn3N28X5d1e3MXeBEXrmLuk7hFaWVffpyKL3RphHESBqDVK1oHVLP+k18Pl7evuXx4CLyJ/auYK6swrdzJaqyaL3FnMCtOAtDqFa3Dk9XT2J6DxZZVmlbu/oIN6x+YudEUSDORkxC06gu9G5AZkfUgQKxWSCt+USRMK3vB64r1bpULTYFJFYBWv2hNlkPqs/oei0PSKvMlpWllrw2OZN9OX1qpMxC0assRZHVqMKuxdGIpzZcUp5W9FSOz9ssbq7A2eQBafaOVvMQffVbDDVcrTYFU7SqRp5W7fo37QKnEZuHaJgFo9Y7WI9SsrqWWHzYpFa9deVrZrZOS+4bWOq5lJXn2gVZNyef6R7DOIatnhavySWWBVvaQH/8fa2WqgNDEANCqm9ZDyOpiRFt7GsaebdDKnqrG/wCJ/IVfJAFo9ZHWZI1ZV26mkKqQUh1nlA1a2QteU4U1TaHsDUUcyp94oFVL9iHryLsCKy0XrxVa2RtTTVTeVBBXC7CCVm20ziGrsxG4iEtNF4cdWrn7CypOEhXC1QqsoNUGreizDg3XRtsIiSVauQteOfti//m9mG7XpJZgBa0WaIWsdnBN3YfVGq1BzpVLdeQuKUwONDbig1eg1R6t6AbY6rlGRi7iUutlYYtW9pU4UberXhm6xFe1zfMNtArTClktptbdF0hbzbeb1mhlPwxXxxOmwkj/KoJJFNo92UCrLK2Q1XLpmml8nvZK/yR0e7SyH9io5yBUrc57iqatrJ9qoFWUVvRZHei6Zit3qyJ7tLL3F9T2LJRKU+06iSoXzjPQqieLHcjqUe1aq9VI6SozNDxikVb2hn9NovGLidWK1ybOEkdOMtCqKYeQ1bfitZ3wWDVZFJWE6P4YyarkJXPii9lM2ix06ATLLH6VxLfXHM19sqs5+qz+JY9iQu+1KYs6xEGT+WLaktD8Ldsox0Ebag5Qs/pav+ZRsSq/uxEty7aoce2K923yrIjL70rYSRkXWZ7gUA06FzPI6nmqPM+LP5LleY461YEfvzyPiveJ8MWMJ4sDyIogCKLd1lPIiiAIov22ZQ5ZEQRBdOdkDlkRBEF05+fxZwTOe8m6NiXr7msW+HIQBPE3hx+F3Nu3KOvP7GD2mml2hi8HQRBvc773p4DTs11r3YAkWv5uUbz93+XpOb4eBEG87QocTpe/+VtPd372uhM3Iut+tPy7M3G6i68HQRBvs1u/Zb/nf25E1nD5yd9N0RZAEMTjLN7+11PWtZSsr3+6jy8HQZARRFTWrpvCVgRBRiDrTFTWF1uxmwWCIENPYmRuwPK7F4hw1BEEGXZ2dwzIuoi+fYU5xrIQBBl2ciPzWbe8xhztVgRBBp09E2uw6m2vcogDjyDIkIvWuQFZk+m2l5mhbEUQBEUrbd+Aq+0vhIeRIAgy3CRrE3td9RgZO8axRxBksImM7CI47UErNhlEEAS0kna+7tFlmFc4+AiCDDWZkWcK9GngYn9BBEGGmt2lkae1gFYEQcYcwiJXynOwQCuCIKOmdW5CVtCKIMi4GwLHRp7dOgWtCIKMOZkJWYPD7a+4DHHwEQQZavpNvjolvuqF/pdEEATxJ+Faf836Quv20bEdHHsEQYabqQFZ+6x0RT8AQZAB58zIrXu4beYBnuGCIMiQczUz0hTdVrbWOPIIggw5B0aGm/a/bzRMcdwRBBl0FlMjA/kn326EjXYAgiADz8ncyBSpCE90RRAEtmqffBpBVgRBxtwS+MrWU7WXjSArgiCoW7UvmLr6rI27hKwIgowkVwcf5mDNTtRfNsk+7Ad7hBEsBEFGi+ty50pLr2E3W76riNcZHuSKIMi4chFNZ//k8Ezj655Hv194J4p2cZQRBHEn/wP5SsviMkkArwAAAABJRU5ErkJggg=="
                                alt="" height="19"></span></a></div>
                <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect"
                        id="vertical-menu-btn"><i class="fa fa-fw fa-bars"></i></button>
                <form class="app-search d-none d-lg-block">
                    <div class="position-relative"><input type="text" class="form-control" placeholder="Search..."><span
                            class="bx bx-search-alt"></span></div>
                </form>
                <div class="dropdown-mega d-none d-lg-block ml-2 dropdown">
                    <button aria-haspopup="true" class="btn header-item waves-effect dropdown-toggle"
                            aria-expanded="false"> Mega Menu <i class="mdi mdi-chevron-down"></i></button>
                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-megamenu dropdown-menu">
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="row">
                                    <div class="col-md-4"><h5 class="font-size-14 mt-0">UI Components</h5>
                                        <ul class="list-unstyled megamenu-list">
                                            <li><a href="/dashboard">Lightbox</a></li>
                                            <li><a href="/dashboard">Range Slider</a></li>
                                            <li><a href="/dashboard">Sweet Alert</a></li>
                                            <li><a href="/dashboard">Rating</a></li>
                                            <li><a href="/dashboard">Forms</a></li>
                                            <li><a href="/dashboard">Tables</a></li>
                                            <li><a href="/dashboard">Charts</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4"><h5 class="font-size-14 mt-0">Applications</h5>
                                        <ul class="list-unstyled megamenu-list">
                                            <li><a href="/dashboard">Ecommerce</a></li>
                                            <li><a href="/dashboard">Calendar</a></li>
                                            <li><a href="/dashboard">Email</a></li>
                                            <li><a href="/dashboard">Projects</a></li>
                                            <li><a href="/dashboard">Tasks</a></li>
                                            <li><a href="/dashboard">Contacts</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-4"><h5 class="font-size-14 mt-0">Extra Pages</h5>
                                        <ul class="list-unstyled megamenu-list">
                                            <li><a href="/dashboard">Light Sidebar</a></li>
                                            <li><a href="/dashboard">Compact Sidebar</a></li>
                                            <li><a href="/dashboard">Horizontal layout</a></li>
                                            <li><a href="/dashboard"> Maintenance</a></li>
                                            <li><a href="/dashboard">Coming Soon</a></li>
                                            <li><a href="/dashboard">Timeline</a></li>
                                            <li><a href="/dashboard">FAQs</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="row">
                                    <div class="col-sm-6"><h5 class="font-size-14 mt-0">UI Components</h5>
                                        <ul class="list-unstyled megamenu-list">
                                            <li><a href="/dashboard">Lightbox</a></li>
                                            <li><a href="/dashboard">Range Slider</a></li>
                                            <li><a href="/dashboard">Sweet Alert</a></li>
                                            <li><a href="/dashboard">Rating</a></li>
                                            <li><a href="/dashboard">Forms</a></li>
                                            <li><a href="/dashboard">Tables</a></li>
                                            <li><a href="/dashboard">Charts</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-5">
                                        <div><img src="/static/media/megamenu-img.8b069df4.png" alt=""
                                                  class="img-fluid mx-auto d-block"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="dropdown d-inline-block d-lg-none ml-2">
                    <button type="button" class="btn header-item noti-icon waves-effect"
                            id="page-header-search-dropdown"><i class="mdi mdi-magnify"></i></button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                         aria-labelledby="page-header-search-dropdown">
                        <form class="p-3">
                            <div class="form-group m-0">
                                <div class="input-group"><input type="text" class="form-control"
                                                                placeholder="Search ..."
                                                                aria-label="Recipient's username">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="d-inline-block dropdown">
                    <button aria-haspopup="true" class="btn header-item waves-effect" aria-expanded="false"><img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z"
                            alt="Skote" class="mr-1" height="16"><span class="align-middle">English</span></button>
                    <div tabindex="-1" role="menu" aria-hidden="true"
                         class="language-switch dropdown-menu dropdown-menu-right">
                        <button type="button" tabindex="0" role="menuitem" class="notify-item none dropdown-item"><img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAUIBgQBAv/EACkQAAIBAgQFBAMBAAAAAAAAAAECAwAEBQYREhUWVZTRExRRUiIxQXH/xAAaAQACAwEBAAAAAAAAAAAAAAAABgEDBwQC/8QAKREAAgEDAgUDBQEAAAAAAAAAAQIDAAQRIVQFEhMUkhWRkwYWNFNxgf/aAAwDAQACEQMRAD8AyzSSSMWZ2ZmbVmJJJJ/przc32aq04BgXRrDtk8V8PguW4Y5JrrDcNggiR3eR7eMKqqNST+NZfH9WxSukcdhKzuQqgMNSa2b1+ID8Z/epO3N9mo3N9mqlbC7yLiF/Lh8WHwRS+pshe5w4QpK2u3buK/idw0Aan/AMC6NYdsniui6+omsigueHSLzZ5SJFIOP5Xo8dVTyvZyqcA4bTQ/0VJe5vs1G5vs1VpwDAujWHbJ4o4BgXRrDtk8VyfeFvspPIVHr8W3f3qS9zfZq9WSSNgyuysraqwJBBH9FVnwDAujWHbJ4o4BgXRrDtk8UfeFvspPIUevRbZ/enFYLMM/D0ZbLD8QtPd3UbX07e3kUxsCm5VjaRwGAGm5K3tZWe1fFbO4w9cCTCgzBzcL6Tes4kDEuI2JJPyaW+ENbIl7JcdPRY+UO4U5LjUAnXFLkcqxTwBwSjNhsAkf7iluRsTytMbuC6ksPd2uIMDLd7bZxbFQFKkiMFtQdRWlshavcXN9Dhl5BLcNtmmlkt2icwnaoURO5BA+wFZmfIqJbotpiVuXnhMd0TAwOpZ9HTQjcdH0/KtLbPuugnLiWuxHT32sReZQw2hthLf5rTJxm74XcWkkNrFbo8VmoEglQu7FkY5xy5Oh0ql2w5m7h5WmkcEBHVUQEkDBNOKKKKQKsooooooqT+aMx9cv8AuH80c0Zj65f9w/mubEY40v75ERVVbiVVAGgAB/Qrl2r8Cto7S120PxrT6IoSAehH4LTPmjMfXL/uH80c0Zj65f8AcP5pZtX4FG1fgUdpa7aH41qejD+mPwWmfNGY+uX/AHD+aOaMx9cv+4fzSzavwKNq/Ao7S120PxrR0Yf0x+C0z5ozH1y/7h/NHNGY+uX/AHD+aWbV+BXVh0cb39ijorK1xErAjUEE/o0dna7aH41qDFCBnoR+C1//2Q=="
                                alt="Skote" class="mr-1" height="12"><span class="align-middle">Spanish</span></button>
                        <button type="button" tabindex="0" role="menuitem" class="notify-item none dropdown-item"><img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcCBQH/xAAlEAABAgILAQEAAAAAAAAAAAABAAIDUQUREhYXVFWjpNLiITL/xAAYAQEBAQEBAAAAAAAAAAAAAAAABwEDBf/EACURAAACCQUBAQAAAAAAAAAAAAABAgMEBREVVKPRFBZVkpTSUf/aAAwDAQACEQMRAD8AiL4sWI98SJFe57nEucSSST9JJK8tOmV3bs03kdyH2S7NN5Hch9l31bLVKe5D1JA/eEb/ADLMDhWnTKWnTK7t2abyO5D7Jdmm8juQ+yaxlqlPcgkD94Rv8yzA4Vp0ylp0yu7dmm8juQ+yXZpvI7kPsmsZapT3IJA/eEb/ADLMDhWnTK9ZFiw3siQ4r2va4FrgSCCPoIIXcuzTeR3IfZLs03kdyH2TVstUp7kEgfvCN/mWYFWRVjC8a5xfaYXjXOL7UunzqqraeBft0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkSdFWMLxrnF9pheNc4vtJ86qq2ngN0uKutLPkVpFt/wC3iRSoSU5SRgZlER+Iwi3UJJUJLIBEYRbqEkqEkgERhFuoSRn7YJlaSMTIv0wiP//Z"
                                alt="Skote" class="mr-1" height="12"><span class="align-middle">German</span></button>
                        <button type="button" tabindex="0" role="menuitem" class="notify-item none dropdown-item"><img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMGBwQI/8QAIxAAAgACCwEAAAAAAAAAAAAAAAECBAcRFhdRVFajpNPiA//EABoBAQACAwEAAAAAAAAAAAAAAAABBgIEBwj/xAAmEQAAAwUJAQEAAAAAAAAAAAAAAQIDBhZUowQRExRSVZPR0hIx/9oADAMBAAIRAxEAPwD3UDLL6qM9S8Oa6xfVRnqXhzXWbeQt0k341dDDERrIamDLL6qM9S8Oa6xfVRnqXhzXWMhbpJvxq6DERrIamDLL6qM9S8Oa6xfVRnqXhzXWMhbpJvxq6DERrIamDLL6qM9S8Oa6xfVRnqXhzXWMhbpJvxq6DERrIeBgXOySz+16Fkln9r0WmLHfn6TXyLBAD27TXY+xTAXOySz+16Fkln9r0Isd+fpNfIQA9u012PsUwFzsks/tehZJZ/a9CLHfn6TXyEAPbtNdj7FMBc7JLP7XoWSWf2vQix35+k18hAD27TXY+xcwd07BBBOzUEECUK+v0SSVSVTOapYHGR6SSv6Iju/SIxECWpYCpYATeIgS1LAVLABeIgS1LA6ZKCCOdlYI4E4X9fmmmq062BCl/KTO78K8f//Z"
                                alt="Skote" class="mr-1" height="12"><span class="align-middle">Russian</span></button>
                        <button type="button" tabindex="0" role="menuitem" class="notify-item none dropdown-item"><img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAgCBwEDBAX/xAAjEAACAQMEAgMBAAAAAAAAAAABAgADBzYEEXSxUbISIUQW/8QAFwEBAQEBAAAAAAAAAAAAAAAABwYFCP/EACcRAAIAAgkEAwAAAAAAAAAAAAABAgMEBQYHETM0dII1NrHBEiEx/9oADAMBAAIRAxEAPwD1mdmYu7sWLbkk7kkyO58yMJzKT5ZtqSf6at9/gre6xi4ulqcmrcCr7rGLjRYXoS3Ez0atDyeTCLPdnKl+/wAVLtozEWa7OVrwqPbShrPTc4RGu77he1m+UVlufMyrupDK5UqdwQdiCJiEnh2aT+mjuhCEFzi4s21OTVuBV91jFxdLU5NW4FX3WMXGiwnQluJno1aFk8mEWa7OVrwqPbRmYs12crXhUe2lDWem5wiNd33C9rN8orKEISeHc7oT0NaiJrdWiIFUVXAAGwABmj4r4EGYocG1icWliWpyatwKvusYuLvazJq3Cq+yxiozWF6EtxM9GrQsnkyMWa7OVrwqPbRm4tF18qXhUu2lDWem5wiNd33A9rN8oq6E27DxOnRIj63So6AqatMEEbg7mTw6RR/GFvD8WJ//2Q=="
                                alt="Skote" class="mr-1" height="12"><span class="align-middle">Italian</span></button>
                        <button type="button" tabindex="0" role="menuitem" class="notify-item active dropdown-item"><img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z"
                                alt="Skote" class="mr-1" height="12"><span class="align-middle">English</span></button>
                    </div>
                </div>
                <div class="d-none d-lg-inline-block ml-1 dropdown">
                    <button aria-haspopup="true" class="btn header-item noti-icon waves-effect" aria-expanded="false"><i
                            class="bx bx-customize"></i></button>
                    <div tabindex="-1" role="menu" aria-hidden="true"
                         class="dropdown-menu-lg dropdown-menu dropdown-menu-right">
                        <div class="px-lg-2">
                            <div class="no-gutters row">
                                <div class="col"><a class="dropdown-icon-item" href="/dashboard"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAMAAACR41cYAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJ/UExURUdwTCEgIB8fHyAfHyAfHyAfHyAfHx8eHiAfHx8eHiAfHyAfHyAfHx8eHiAfH5jU5h8eHiAfHyAfHyAfHx8eHh8eHiAfHyAfIAQBAxgWFiEhISEgIAwCACAgIB0bGi40NhkVFCAfH5za8FBncENVXKTm95vZ8Jza8J7c8R0bGhMTEx0cHCAfHyEgH73//yEgIJ7c8QAAAIfF6TM7PwwJCh4cHHm45SAfHyAfH5za8CAfH5za8Jza8Jza8Jza8CAfH5za8G6VokRVWxIKCJza8JvY7pza8DtITTlFSZ3b8AMHCgAABJza8ElBPDA4PFVLRK3z/zEvLRcXGEVBPTA5PJza8AADB5vZ74XD6QIAAIrJ67T+/4HA6BAIByAfH4zK7IrI6zE4O7D5/yAfHwEAACIgIJza8BUWGAACBhoaGvXLsQ0PEZ/g957c8RATFf/oy1p4hfzRticqLIC+6Jrm///jxiMiIvDEq//Xu/bHq//fxG5eVRgXF////P/z0P/22lNHQv/gv//877H5/xcTEhUOC76cicyolCcjIf/avdivlpvY7mZaUQMHC1lNRfrNsPTJr//o0v/cwf3WuHtnXIshF4VuYvTEqfrcyM+oqOrW1PTm4v716zM7PqHf8v/t1SkpJsD//1RueGebxaPn/IXK/TVIV3OapbmXheK0mNuymv/GrdWZhu/Tx+u7pI54adymkf/658+dlMifn+S1mafq+7uhizYvLeLCufLs7/rk1mNVTf/NrtOskqeHd8aXlXFgVv/kwZU1LNW1neK9tJAuJsCMirJwa+nKv9zFx2CRtVuKronG6naszSUnKUZaZG+TmUFPU3agr3GkxIu8xSfH+3sAAABzdFJOUwD97RwqJTMat/4VL6DlCwmSOh2qV77yhGEIms8njIj9+xEk6wESA6CMcwRtUGQlwnjIs9iu9u3fsS5e3hvwhB66hguP9eJfotdT9nPf4o7mPNW62Kc/5MnTMeRzzcTG3/LkYv////////////////////54WQMpAAACTklEQVQYGXXABVMiYRgA4BdYdhkExa5TR8Xuvu7u7v5g2V06XFGxO7C72+vu7s74Qaczd87sIg/85yeUJMMCsUK+FFzIEEISvwSZxF8iSwpEczyBT4L4xMAXhniE4CIQ8QRgwCMWID458PgipEYag0ZD07TGYHCgOcuBI1GIWA3lqEcOrVbrUNdXUzSLfIHDB7EG7fXGi411tRdq6y7dedrl1KjTgGMNop3PSm+WGO35+fkNHSUlpT0U8geO4ABneUX7w9tXWxmGKXzU/7HyyX2tBLhCVT0vh/q7b7W3MW1Fb169H6p4TIXAP1IRQfiIMV/qRUXl8+4HHUwnY//w9l1lZ7kzHBP7EIRICpg3juMemLd2zGwcHOjrLbjB9PYNDI72sgYc88Bx3BsDQiSN9FQCpFDFxrKyVvO1KwXmwtGy0i4qBUDpGSkVEbDA73D5vYIGo/2y3Vhkfl28PQl4NoQABAdl79vV0lzc3LLnwP4dBPB4rbNkwbwM1byMRHAVk7qe3gIAyWpWIBCwKAgWFTS8dfdBQY5cIMsRsv6wuARLhIU+rUBhKCQgFNwIPrYkTR6uVqjD80LBvWxhIFKgsLxT4IYy9XyWJbo6ujo64tyJvbGwiM1H9OM/kalmosb0bXhct2m1F/DExpG6KZPqxy/Vd9XsrGriro5cEQVcUSSp05s+T0XU/HGM6T6Z9DqSjAcur7Vkk77KNjnzu+rrzKStSt9ErloGfOk7yRGr1Tb9ZdpmtY6QG+NWgivlofTMk2dyz+YeP5oZvy0GFvwFlSbPVswTomsAAAAASUVORK5CYII="
                                            alt="Github"><span>GitHub</span></a></div>
                                <div class="col"><a class="dropdown-icon-item" href="/dashboard"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAdCAMAAABopjdHAAAAwFBMVEVHcEwAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4MAT4Mri5Y4AAAAP3RSTlMAIwhydxy28hIWIc+je6u9P/b9BUziKJcMxKdZAjyMXjfXu8Hm1eou2t0z+rKRRq+A7my6Qp/M34PrU1YPiL7YsJ9AAAABbUlEQVQYGW3Bh3aiQAAF0EedoSMiYu+isdcka7Lv//9qYTib3eR4LwB9b9yilWBtefeN2NFR6h3WJOfeLIqizn3REiQXgdaEMSdb5uiaWTLXc+mOH5+XOSlGaJDJDN+NSJ7QILn0zcegcJ2SpWUvaZcleFROk44d+jf/MF1sWHlHl895OPI5GyM+10bML97US/iXiazB2jIo8uJtzlqSQptQWZ6hxzoMQaU1gGVTCfUsbPnaR0hllkG2WUkCmCQDmFRuEk2TlcSESdJAQCVoAj0q4YfWXrRduaXyC0BKRQRAARwFK5sxAGdL5X0YW/HniUrkomQNWVt11lQ2swFq4+GK/7RsA7XrzkKWGu3Q/h3Z4c7YQw5yVHpiYTpAX1quJZuATKO1hsqLR+H556smc6mNH0c74dZBxbFZEuv77DLtTARLZx2Vvs+f4j6UIX+yUCte+V03R60/PvA/ouvii7N/m742yESsLrtejsofWqVrkBSdwYAAAAAASUVORK5CYII="
                                            alt="bitbucket"><span>Bitbucket</span></a></div>
                                <div class="col"><a class="dropdown-icon-item" href="/dashboard"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA0lBMVEVHcEzEI2HDI2HDI2HEI2HDI2HDI2HEI2HDImHDI2HDI2HDImDDI2HEI2HDI2HDI2HDI2HEI2HDI2HDI2HDI2HDI2HDI2HDI2HDI2HDI2HDI2HEJGLDI2HDI2HDI2HqTInxU5C9HFq7GlnyVJHEI2HpS4jwUY/BIV/tTou3FlTCImDzVZK6GVfUNXPfP32+HVziQ4DaOnjrTYrFJWO/Hl3MLGrKKmjAH17uUI3cPXrXN3XSMnC1FFLoSYf1V5T4WpfPLm3mR4TIKGbQMG7wU5DqS4gW3fYwAAAAH3RSTlMAlnPA0mVNzNyLQuQo7zUfxPFVXWx6pPMCRX/1A3yvLDJKvgAAAk1JREFUGBllwIV2GmkUAOAbIUD8bCrp2v1dx10ZBmbf/5WW0DZtTz/44X518fzwef3pwyP87uZKiJhRSlns1iv41f2Vpk73bdumYVUwff0FfvKS07rUNJz4wrlJwpqJj/Dug2D5vNsHrPUS0Sx+rgqxhW/+EKxsuMpEoKWSiCj5rqTiTzh7EqzkSkof0WBPMkRpfORYIW7hzZrmjZKIGd8HrPUSCe8Cmx7pA5zcOpp4iYhSSRfkxvOxtDacUNeXALBmR45n0reUhSaMh7jlxnfsAeDJ0YRjZoxaiG8OsXBDsB95JtWs9S2s4spz1Rg5R+mxcrWu99Gi8ETt6RYu6qrr92WV18wOVuSFyHYZZojIU/YMVzkdBmstK0QVtpgUQTepE0KmhG5go8uwD8M0SkZD/LQrg7zrj8c+TJO0voMNjSa1ELIoY3jT9rlzwWCtHQZbizu4oinHN7LhyYENTNeHtG3bri+F28AFCwmeyKXpmaWHJAxytVsIX3YpfYZVcTAGUfLxYIND1ExzwVqOJ7ynW3hycUJQ8lnbuGu8yZrSlipDbEanvwCsWe8lH7XViTcSkXc2Hw1Kn7LPrwA3ukimLB/c6PGNSmIaEakyV/wDJ9e08v2gR49nBnPbEeP37K9XOLkX9UHTyP+HXy29LdWuY+4Gzl5EHKQTfsfTIDcp01v46vVSFOXsVYZnZK5FVegLeLcStAjnhpNlIZwkoo7dFn7yuNasLrs2itq0dE5sbuBXL2tHGY1jyqjeXP4Nv3m8/LS+u7v+9+MtvPsfo0R0DDqUOxMAAAAASUVORK5CYII="
                                            alt="dribbble"><span>Dribbble</span></a></div>
                            </div>
                            <div class="no-gutters row">
                                <div class="col"><a class="dropdown-icon-item" href="/dashboard"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAMAAABkz+JgAAAAxlBMVEVHcEwAfuYAfuYAfuYAfuYAfecAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuUAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAf+UAfuYAfuYAfuYAfuYAfuYAfuYAfuYAf+YAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuYAfuUAfuYAgOcAfuYAfeYAf+YAfuYAfuZXV9ysAAAAQXRSTlMACxEy+QLr/PX+2xgHGh58vjZgQeTHDu1k6RWMKIbTudej4Jipy0cFcPPvL3MkTBNn0HfFVq5Q6LVrOh8GnFk8kkQ6JVUAAAGsSURBVBgZfcEHgppAAAXQjw4Mgi5iD/Yu9o6uW/Lvf6kgiowmm/cQq3y1G0g0hvMKXuTaksESMdei2LhQaWuTIbOQxZW+9xnyJys8NMqCEVHXAYybPiNyOMNNZW3wYWBjVZeMmVsPocVOMiE3bl4yITdpYFSlShyKXZ8qs4ZcmYrSKIvxd4+KzQXQ+oJ31X4OV5VmlXdyYCM0rklGrLSOG/0tz4jcZnGz7JEMnCwS2sQiWSroiHlDnlY6nngDGjMo3tseXun9dyi8jiyn8MzeyamLh31A0ndSSKQmPZJBLYuI7kheZaouYpcWI7KJK+9T8M7sL3CVq5uMHS5ArkOFudeB4pSK0gWjElXiMOoKqn6tgVReMpEZvuUzTMjWBSGt1mMs8zmrp+uCselcw01uJxkRzqXDanouGJFlGw/jQsCQUThaJIPC0WAoOKeg0k6SRnHpM+I0LMrWAs/m6a/urCl4I7ru6ewV8KxtLO0uE3m7OG3j2dmXFlWdKZt44bYEVZlOEX/RagYTxsTGv1S6Pm/MfAM/+CiWeWUds/jZh1Oi8VvDf+mLbVrHsz8x4n90MIcLhQAAAABJRU5ErkJggg=="
                                            alt="dropbox"><span>Dropbox</span></a></div>
                                <div class="col"><a class="dropdown-icon-item" href="/dashboard"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAMAAADCMPhoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJAUExURUdwTGVPRGVPRHVeUGVPRGVPRGRPRWVPRGVPRGVPRGRQRWVPRWVPRGVPRGVPRGRPRWVPRGVPRGVPRGVPRGVPRGBVUmVPRGVPRGtUR2VPRGVPRGVPRGVPRGVPRGVPRGVPRF9LQ3NZSZ6IdmVPRGNVT3poX2VPRGVPRHlhRl9gZIFnR2VPRJBpTP3rzvTSqxIgNEme1yyDwhUiNY5oTGZQRGlSRfzoyf3qzffbuPXixZpzVfTVsGBMQ/PQqXpbSIRiSnFWRvjlyP///39fSW1URrKUeIhkSkM8Pe/Np4tmSyx8tvrgvv37+ZRtT5ZwUuPDn1VHQ595WnNYR5FqTVKCo2NOQ/vlxdrBpCEpN9y7mPXUrj1IWZV7ZzWKxqqTfunIo/PRq7mafsm/ubipoP338LispLyrmKWNeFtlcPzy55yBa/PNo9e2lCcsOO3AkO7Gm1lZXhUpQi6CvsilgzA8TaeCY0SZ05yDbysuOTExOvbYs/HdwaqHaeDBnc62nGJqeOXQtBspPLKch8ytj/327fjz7sO3r35sWb+yqbOObk5jdmNdXzR7sPHJnfDbvUVujVd1inhxcVJgb7+aeerXvDZ5qo2Aeyg0Rh9PdkhphShzq/fixBxFaRk1UZ97XjpznjZCUzQzO15LQydrnq6Vf829sPnn06GGcIRlTy4+UqCeoPLv7s7Hw+Hd2+zp546UnqCjpc62e7uoayhfiqmRSHWAjlBTROa+T9KxTFKFqe/HTp+XXllwgsW4a5e0njlHS3QagBcAAAArdFJOUwChif0QVMAFATnZ3hjoM8j3bbLSKPesC/SV9JpILoBY8Pz9kf3wgnaT/pqvGFBIAAACu0lEQVQ4y3WU5VsiURTGCZFBxcCu7ebOXBiQRgQBRbBwLbCwde3uWN1Ht7u7w+3u/df23mGYhcf1/fp776k5Z3i8CIklObm8rZWbndr9c+2QmCeOF22P34Tj+Ae/KX79/vHlQObeK+dPViRERWBCtOewQqH48/3rx3cvFmkIYX90RPLMbgVWyef3b/0Qc0hLw3hUwjmGN3741A1Z0bFhPBaHV0w8fP5mGdJI2DCV/Y/HMLzx1r1Fum7qvslkKuqH9A4xlz/67ATiI8P+MXraJA9quiiJC7DthFKJyoP+5TqM1XmWQq9dncZxyZBSqWwsgWN0EcJ5hSqA5eSaJGJOIUMJfRVWIOwCQVWV7UxnDaILiI8M05h7ASg1GEqrQFm9r1bGGmSXkeEahCi+HQCDdYbCMg8MxrCGVMRvQFiH8qPsZ3ynB44wluJww21IV6MCAHAYzYMMpuqbk1kD/7ry7oNqxOX5ACxQ6HlfOXovLE/gxjTkRbFdankhAKP4ce8kpXMbizNEoTkUoNpG51AEFSgzI4Oj13jJMa/R7+IHDfssoNJMNaARokDHWyjKWKMlrVqS1DYJgkW4QMBnRgacA1T21ZAh6RrisEFgAXMa3Roy2F2gcl4TwtqZZmEcW0NVYCmAP6HTUBziGl1LoC24MsRu1B9QMX1e1CGm17h1LStd6683pESw0aSMAm8eM8nxmyT56HFra+vLVx6bzXY0NCyxgFkSFSidJa0rT3ra23t6PDbPuj6LuwnWAGpJsulY++qqx7bR0WntEnFLkYYNFgDGSXK2s62jo61zQe+eD9/rRLxNTgD0bBc1bl+zMCXsMiQ4hN0JHCGHtl64P+L2RNihtqju1FoxXuqSC4jI442XYoe6IP/Z06ZJoTwradN5E/xEOafolP/9INIFyYxHKpNs+RMhUnIk4T+Gv3cNvzi99G5fAAAAAElFTkSuQmCC"
                                            alt="mail_chimp"><span>Mail Chimp</span></a></div>
                                <div class="col"><a class="dropdown-icon-item" href="/dashboard"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAACplBMVEVHcEz////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////60uX///////////////////////////////9uytzmmQDpqCA+uZHgFWPkkQAWjnjODgjIAQNVwdYarX3XADfcAEj5/f3cAE7L7PN/1e7ppAuw49I2t42G1bjjFnJkyuXsqyX22qE8uJDyn75zzN70qcViegRUgh/ZAT245ddB2aIzACb34LAFgmbMAgpFsrj//vTS7/QVqnr+/PrppxwwvIzvw2Puu1BKvdT+8PXI7OEOqHaS1+XfA15cw9f96r7E6vFcz/pLdARCvZTw+fbfDV9lhhv/ryHpU4zhGmj2vtH7AlgdtIEYDjGm3+oKlG8bk3zrtwmd2+ggl4FSwpoIimozpJrIkgDe9PrPJQB12v/rtiT8//8rpoR/0N6v4/LtwBxSwtvlO3vI6+pgxqVGu9MLp3NzzLC95++Zkxzwibb/GW0bfWb33qvumwD+c6cUACE3ADAvs4k5UVo3EDnvzCxsxK/kfUb96vnSNgD+rBznnh81r4zUEil7ysTpf4H384miwZjWOxfcag395/cPjW714Hn3ynT6nABVvc9gx+D44rVkx9rbWhfkjxzmS4V3ih1Lj03fFV7TDCJmnV5staHhK2njMHNuxc0nn4Jv0e+wVX9dqo3sFmem6P9Eu9JtAC/IvG1Jfhxym1BsgQqh5/9AEjyoAErufqr01pXrsDYoDjQ4Gj0cy47Alw5wLFTuAVp6z7PYJWp43rueFVRmEkb0ZprVAEUgt4QsiG94nZYsIT9Gx5y9/+uQ18Ci3coAom6/ICZyAAAAKXRSTlMAP9pMoGFRR+eup71y+9DzuF0xoyLgFQKyWWadV4P2w5b+kQivDFtcxZCJTt8AAAKlSURBVBgZdcCDU2QBGADwrxXaai/76oTvvbdmNnezbetqsjHZOtu2bdvGf3K1u9NMN9cPFmPzOOtZsBQ6jiX5IxP+z5bjLxKJnprCP+wtGSwAsMJnpB9J4Vq2I8MeFliiZziuBLDBZJKixrNR5eaGxmBgrupNTx9ANoDj2HhxMXn3YZAsJUNlDno8z/4Ar7g0S1sWL4Z6NfQgtNuXIPpyeKC3zFMuEMR5861Vsbfu590LDbnYQpxIcbMDPXqBl1d+Yl1sZ5As90ZIUVHIhdxuWRUagZ4Test3tB+M9s0irl0pCgnNC+3obEIT0FlHw6Zd9WJxZIM7QRC5Z/PODDVmc5wtQIeNg0G+R8XianEt4SvLatnb6Fd85LA1GJjl9GUR7g311eLIaPeq2LaYbR6Uh1+8EVhZrAIA04yUIMI9OlJcu2ETzksiKYrMNuMickwAaDm3ZbJjxNV2QWIdzosgqdaaQwcCT196gubAxsGODDeVd0V+gDwN522s2b5/X6laqVYMcwCYNOQzzMLlAkGcN87ZsnmrRCoN8xGWhpWYwhwrG3AqCJgWJGowNbjERyGNkkh2+hQqFYE0MOC/f6kJGL0+olRmnpNIJNIodWZPMNJBh+7KDx+deTF5p1woFPqcl0qjmnevQBc66Lhi2ad3Wu3U80fCm4XqTEXzyVMee0wtQI8VXxKmLP9YOTtb+bhcfXm4rLWry8Mvxgj0lgUrCoUjHyqntJOvJ8qQtjyJpCgywhj0eIEKofDNZ+33ma8/2rhGsPq4KCFBFMEFPYfUnjBl6cS3Co3mS5ozAAuTRaLkeBYY2GFgcCr+rBAI5G/5awCM0d8fGbCAacxgmxR4TefLe9EGAJhcLhMWs8Vff9L7Pa1hCSb4eyAc2bAUBzOOCx0W+QuvxroExNCXxAAAAABJRU5ErkJggg=="
                                            alt="slack"><span>Slack</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dropdown d-none d-lg-inline-block ml-1">
                    <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen"><i
                            class="bx bx-fullscreen"></i></button>
                </div>
                <li class="dropdown d-inline-block dropdown">
                    <button id="page-header-notifications-dropdown" aria-haspopup="true"
                            class="btn header-item noti-icon waves-effect" aria-expanded="false"><i
                            class="bx bx-bell bx-tada"></i><span class="badge badge-danger badge-pill">3</span></button>
                    <div tabindex="-1" role="menu" aria-hidden="true"
                         class="dropdown-menu dropdown-menu-lg p-0 dropdown-menu dropdown-menu-right">
                        <div class="p-3">
                            <div class="align-items-center row">
                                <div class="col"><h6 class="m-0"> Notifications </h6></div>
                                <div class="col-auto"><a href="#" class="small"> View All</a></div>
                            </div>
                        </div>
                        <div data-simplebar="init" style="height: 230px;">
                            <div class="simplebar-wrapper" style="margin: 0px;">
                                <div class="simplebar-height-auto-observer-wrapper">
                                    <div class="simplebar-height-auto-observer"></div>
                                </div>
                                <div class="simplebar-mask">
                                    <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                        <div class="simplebar-content-wrapper" style="height: auto; overflow: hidden;">
                                            <div class="simplebar-content" style="padding: 0px;"><a
                                                    class="text-reset notification-item" href="/">
                                                    <div class="media">
                                                        <div class="avatar-xs mr-3"><span
                                                                class="avatar-title bg-primary rounded-circle font-size-16"><i
                                                                    class="bx bx-cart"></i></span></div>
                                                        <div class="media-body"><h6 class="mt-0 mb-1">Your order is
                                                                placed</h6>
                                                            <div class="font-size-12 text-muted"><p class="mb-1">If
                                                                    several languages coalesce the grammar</p>
                                                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> 3
                                                                    min ago </p></div>
                                                        </div>
                                                    </div>
                                                </a><a class="text-reset notification-item" href="/">
                                                    <div class="media"><img src="/static/media/avatar-3.2cfd5ba6.jpg"
                                                                            class="mr-3 rounded-circle avatar-xs"
                                                                            alt="user-pic">
                                                        <div class="media-body"><h6 class="mt-0 mb-1">James Lemire</h6>
                                                            <div class="font-size-12 text-muted"><p class="mb-1">It will
                                                                    seem like simplified English.</p>
                                                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i>1
                                                                    hours ago </p></div>
                                                        </div>
                                                    </div>
                                                </a><a class="text-reset notification-item" href="/">
                                                    <div class="media">
                                                        <div class="avatar-xs mr-3"><span
                                                                class="avatar-title bg-success rounded-circle font-size-16"><i
                                                                    class="bx bx-badge-check"></i></span></div>
                                                        <div class="media-body"><h6 class="mt-0 mb-1">Your item is
                                                                shipped</h6>
                                                            <div class="font-size-12 text-muted"><p class="mb-1">If
                                                                    several languages coalesce the grammar</p>
                                                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> 3
                                                                    min ago</p></div>
                                                        </div>
                                                    </div>
                                                </a><a class="text-reset notification-item" href="/">
                                                    <div class="media"><img src="/static/media/avatar-4.b23e41d9.jpg"
                                                                            class="mr-3 rounded-circle avatar-xs"
                                                                            alt="user-pic">
                                                        <div class="media-body"><h6 class="mt-0 mb-1">Salena
                                                                Layfield</h6>
                                                            <div class="font-size-12 text-muted"><p class="mb-1">As a
                                                                    skeptical Cambridge friend of mine occidental.</p>
                                                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i>1
                                                                    hours ago </p></div>
                                                        </div>
                                                    </div>
                                                </a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
                            </div>
                            <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                            </div>
                            <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                                <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
                            </div>
                        </div>
                        <div class="p-2 border-top"><a class="btn btn-sm btn-link font-size-14 btn-block text-center"
                                                       href="/dashboard"> View all </a></div>
                    </div>
                </li>
                <div class="d-inline-block dropdown">
                    <button id="page-header-user-dropdown" aria-haspopup="true" class="btn header-item waves-effect"
                            aria-expanded="false"><img class="rounded-circle header-profile-user"
                                                       src="/static/media/avatar-1.3921191a.jpg"
                                                       alt="Header Avatar"><span
                            class="d-none d-xl-inline-block ml-2 mr-1">admin</span><i
                            class="mdi mdi-chevron-down d-none d-xl-inline-block"></i></button>
                    <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><a
                            href="/profile" tabindex="0" role="menuitem" class="dropdown-item"><i
                                class="bx bx-user font-size-16 align-middle mr-1"></i>Profile</a><a
                            href="/crypto-wallet" tabindex="0" role="menuitem" class="dropdown-item"><i
                                class="bx bx-wallet font-size-16 align-middle mr-1"></i>My Wallet</a><a href="#"
                                                                                                        tabindex="0"
                                                                                                        role="menuitem"
                                                                                                        class="dropdown-item"><span
                                class="badge badge-success float-right mt-1">5</span><i
                                class="bx bx-wrench font-size-17 align-middle mr-1"></i>Settings</a><a
                            href="auth-lock-screen" tabindex="0" role="menuitem" class="dropdown-item"><i
                                class="bx bx-lock-open font-size-16 align-middle mr-1"></i>Lock screen</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/logout"><i
                                class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i><span>Logout</span></a>
                    </div>
                </div>
                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item noti-icon right-bar-toggle waves-effect"><i
                            class="bx bx-cog bx-spin"></i></button>
                </div>
            </div>
        </div>
    </header>
    <div class="vertical-menu">
        <div data-simplebar="true" class="h-100">
            <div data-simplebar="init" style="max-height: 100%;">
                <div class="simplebar-wrapper" style="margin: 0px;">
                    <div class="simplebar-height-auto-observer-wrapper">
                        <div class="simplebar-height-auto-observer"></div>
                    </div>
                    <div class="simplebar-mask">
                        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                            <div class="simplebar-content-wrapper" style="height: auto; overflow: hidden scroll;">
                                <div class="simplebar-content" style="padding: 0px;">
                                    <div id="sidebar-menu" class="mm-show">
                                        <ul class="metismenu list-unstyled mm-show mm-active" id="side-menu">
                                            <li class="menu-title">Menu</li>
                                            <li class="mm-active"><a class="waves-effect mm-active" href="/"
                                                                     aria-expanded="false"><i
                                                        class="bx bx-home-circle"></i><span
                                                        class="badge badge-pill badge-info float-right">04</span><span>Dashboards</span></a>
                                                <ul class="sub-menu mm-collapse mm-show" aria-expanded="false">
                                                    <li class="mm-active"><a href="/dashboard"
                                                                             class="active">Default</a></li>
                                                    <li><a href="/dashboard-saas">Saas</a></li>
                                                    <li><a href="/dashboard-crypto">Crypto</a></li>
                                                    <li><a href="/dashboard-blog">Blog</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-title">Apps</li>
                                            <li><a class=" waves-effect" href="/calendar"><i class="bx bx-calendar"></i><span>Calendar</span></a>
                                            </li>
                                            <li><a class=" waves-effect" href="/chat"><i class="bx bx-chat"></i><span>Chat</span></a>
                                            </li>
                                            <li><a class=" waves-effect" href="/apps-filemanager"><i
                                                        class="bx bx-file"></i><span
                                                        class="badge badge-pill badge-success float-right">New</span><span>File Manager</span></a>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-store"></i><span>Ecommerce</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/ecommerce-products">Products</a></li>
                                                    <li><a href="/ecommerce-product-detail/1">Product Detail</a></li>
                                                    <li><a href="/ecommerce-orders">Orders</a></li>
                                                    <li><a href="/ecommerce-customers">Customers</a></li>
                                                    <li><a href="/ecommerce-cart">Cart</a></li>
                                                    <li><a href="/ecommerce-checkout">Checkout</a></li>
                                                    <li><a href="/ecommerce-shops">Shops</a></li>
                                                    <li><a href="/ecommerce-add-product">Add Product</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-bitcoin"></i><span>Crypto</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/crypto-wallet">Wallet</a></li>
                                                    <li><a href="/crypto-buy-sell">Buy/Sell</a></li>
                                                    <li><a href="/crypto-exchange">Exchange</a></li>
                                                    <li><a href="/crypto-lending">Lending</a></li>
                                                    <li><a href="/crypto-orders">Orders</a></li>
                                                    <li><a href="/crypto-kyc-application">KYC Application</a></li>
                                                    <li><a href="/crypto-ico-landing">ICO Landing</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-envelope"></i><span>Email</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/email-inbox">Inbox</a></li>
                                                    <li><a href="/email-read">Read Email </a></li>
                                                    <li><a href="/" aria-expanded="false"><span
                                                                class="badge badge-pill badge-success float-right">New</span><span>Templates</span></a>
                                                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                            <li><a href="/email-template-basic">Basic Action</a></li>
                                                            <li><a href="/email-template-alert">Alert Email </a></li>
                                                            <li><a href="/email-template-billing">Billing Email </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-receipt"></i><span>Invoices</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/invoices-list">Invoice List</a></li>
                                                    <li><a href="/invoices-detail">Invoice Detail</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-briefcase-alt-2"></i><span>Projects</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/projects-grid">Projects Grid</a></li>
                                                    <li><a href="/projects-list">Projects List</a></li>
                                                    <li><a href="/projects-overview">Project Overview</a></li>
                                                    <li><a href="/projects-create">Create New</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-task"></i><span>Tasks</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/tasks-list">Task List</a></li>
                                                    <li><a href="/tasks-kanban">Kanban Board</a></li>
                                                    <li><a href="/tasks-create">Create Task</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bxs-user-detail"></i><span>Contacts</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/contacts-grid">User Grid</a></li>
                                                    <li><a href="/contacts-list">User List</a></li>
                                                    <li><a href="/contacts-profile">Profile</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="waves-effect" href="/" aria-expanded="false"><span
                                                        class="badge badge-pill badge-success float-right">New</span><i
                                                        class="bx bxs-detail"></i><span>Blog</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/blog-list">Blog List</a></li>
                                                    <li><a href="/blog-grid">Blog Grid</a></li>
                                                    <li><a href="/blog-details">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-title">Pages</li>
                                            <li><a class="waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-user-circle"></i><span
                                                        class="badge badge-pill badge-success float-right">New</span><span>Authentication</span></a>
                                                <ul class="sub-menu mm-collapse">
                                                    <li><a href="/pages-login">Login</a></li>
                                                    <li><a href="/pages-login-2">Login 2</a></li>
                                                    <li><a href="/pages-register">Register</a></li>
                                                    <li><a href="/pages-register-2">Register 2</a></li>
                                                    <li><a href="/page-recoverpw">Recover Password</a></li>
                                                    <li><a href="/page-recoverpw-2">Recover Password 2</a></li>
                                                    <li><a href="/auth-lock-screen">Lock Screen</a></li>
                                                    <li><a href="/auth-lock-screen-2">Lock Screen 2</a></li>
                                                    <li><a href="/page-confirm-mail">Confirm Mail</a></li>
                                                    <li><a href="/page-confirm-mail-2">Confirm Mail 2</a></li>
                                                    <li><a href="/auth-email-verification">Email verification</a></li>
                                                    <li><a href="/auth-email-verification-2">Email verification 2</a>
                                                    </li>
                                                    <li><a href="/auth-two-step-verification">Two step verification</a>
                                                    </li>
                                                    <li><a href="/auth-two-step-verification-2">Two step verification
                                                            2</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-file"></i><span>Utility</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/pages-starter">Starter Page</a></li>
                                                    <li><a href="/pages-maintenance">Maintenance</a></li>
                                                    <li><a href="/pages-comingsoon">Coming Soon</a></li>
                                                    <li><a href="/pages-timeline">Timeline</a></li>
                                                    <li><a href="/pages-faqs">FAQs</a></li>
                                                    <li><a href="/pages-pricing">Pricing</a></li>
                                                    <li><a href="/pages-404">Error 404</a></li>
                                                    <li><a href="/pages-500">Error 500</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-title">Components</li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-tone"></i><span>UI Elements</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/ui-alerts">Alerts</a></li>
                                                    <li><a href="/ui-buttons">Buttons</a></li>
                                                    <li><a href="/ui-cards">Cards</a></li>
                                                    <li><a href="/ui-carousel">Carousel</a></li>
                                                    <li><a href="/ui-dropdowns">Dropdowns</a></li>
                                                    <li><a href="/ui-grid">Grid</a></li>
                                                    <li><a href="/ui-images">Images</a></li>
                                                    <li><a href="/ui-lightbox">Lightbox</a></li>
                                                    <li><a href="/ui-modals">Modals</a></li>
                                                    <li><a href="/ui-rangeslider">Range Slider</a></li>
                                                    <li><a href="/ui-session-timeout">Session Timeout</a></li>
                                                    <li><a href="/ui-progressbars">Progress Bars</a></li>
                                                    <li><a href="/ui-sweet-alert">Sweet-Alert</a></li>
                                                    <li><a href="/ui-tabs-accordions">Tabs &amp; Accordions</a></li>
                                                    <li><a href="/ui-typography">Typography</a></li>
                                                    <li><a href="/ui-video">Video</a></li>
                                                    <li><a href="/ui-general">General</a></li>
                                                    <li><a href="/ui-colors">Colors</a></li>
                                                    <li><a href="/ui-rating">Rating</a></li>
                                                    <li><a href="/ui-notifications">Notifications</a></li>
                                                    <li><a href="/ui-image-cropper">Image Cropper</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bxs-eraser"></i><span
                                                        class="badge badge-pill badge-danger float-right">10</span><span>Forms</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/form-elements">Form Elements</a></li>
                                                    <li><a href="/form-layouts">Form Layouts</a></li>
                                                    <li><a href="/form-validation">Form Validation</a></li>
                                                    <li><a href="/form-advanced">Form Advanced</a></li>
                                                    <li><a href="/form-editors">Form Editors</a></li>
                                                    <li><a href="/form-uploads">Form File Upload </a></li>
                                                    <li><a href="/form-xeditable">Form Xeditable</a></li>
                                                    <li><a href="/form-repeater">Form Repeater</a></li>
                                                    <li><a href="/form-wizard">Form Wizard</a></li>
                                                    <li><a href="/form-mask">Form Mask</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-list-ul"></i><span>Tables</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/tables-basic">Basic Tables</a></li>
                                                    <li><a href="/tables-datatable">Data Tables</a></li>
                                                    <li><a href="/tables-responsive">Responsive Table</a></li>
                                                    <li><a href="/tables-editable">Editable Table</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bxs-bar-chart-alt-2"></i><span>Charts</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/apex-charts">Apex charts</a></li>
                                                    <li><a href="/chartist-charts">Chartist Chart</a></li>
                                                    <li><a href="/chartjs-charts">Chartjs Chart</a></li>
                                                    <li><a href="/e-charts">E Chart</a></li>
                                                    <li><a href="/tui-charts">Toast UI Chart</a></li>
                                                    <li><a href="/sparkline-charts">Sparkline Chart</a></li>
                                                    <li><a href="/charts-knob">Knob Chart</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-aperture"></i><span>Icons</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/icons-boxicons">Boxicons</a></li>
                                                    <li><a href="/icons-materialdesign">Material Design</a></li>
                                                    <li><a href="/icons-dripicons">Dripicons</a></li>
                                                    <li><a href="/icons-fontawesome">Font awesome</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-map"></i><span>Maps</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                    <li><a href="/maps-google">Google Maps</a></li>
                                                    <li><a href="/maps-vector">Vector Maps</a></li>
                                                    <li><a href="/maps-leaflet">Leaflet Maps</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow waves-effect" href="/" aria-expanded="false"><i
                                                        class="bx bx-share-alt"></i><span>Multi Level</span></a>
                                                <ul class="sub-menu mm-collapse" aria-expanded="true">
                                                    <li><a href="/dashboard">Level 1.1</a></li>
                                                    <li><a class="has-arrow" href="/dashboard" aria-expanded="false">Level
                                                            1.2</a>
                                                        <ul class="sub-menu mm-collapse" aria-expanded="true">
                                                            <li><a href="/dashboard">Level 2.1</a></li>
                                                            <li><a href="/dashboard">Level 2.2</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="simplebar-placeholder" style="width: auto; height: 1276px;"></div>
                </div>
                <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                    <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                </div>
                <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                    <div class="simplebar-scrollbar"
                         style="height: 129px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between"><h4
                                class="mb-0 font-size-18">Dashboard</h4>
                            <div class="page-title-right">
                                <nav class="" aria-label="breadcrumb">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="/dashboard">Dashboards</a></li>
                                        <li class="active breadcrumb-item" aria-current="page"><a href="/dashboard">Dashboard</a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4">
                        <div class="overflow-hidden card">
                            <div class="bg-soft-primary">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="text-primary p-3"><h5 class="text-primary">Welcome Back !</h5>
                                            <p>Skote Dashboard</p></div>
                                    </div>
                                    <div class="align-self-end col-5"><img src="/static/media/profile-img.43b59e59.png"
                                                                           alt="" class="img-fluid"></div>
                                </div>
                            </div>
                            <div class="pt-0 card-body">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="avatar-md profile-user-wid mb-4"><img
                                                src="/static/media/avatar-1.3921191a.jpg" alt=""
                                                class="img-thumbnail rounded-circle"></div>
                                        <h5 class="font-size-15 text-truncate">Henry Price</h5>
                                        <p class="text-muted mb-0 text-truncate">UI/UX Designer</p></div>
                                    <div class="col-sm-8">
                                        <div class="pt-4">
                                            <div class="row">
                                                <div class="col-6"><h5 class="font-size-15">125</h5>
                                                    <p class="text-muted mb-0">Projects</p></div>
                                                <div class="col-6"><h5 class="font-size-15">$1245</h5>
                                                    <p class="text-muted mb-0">Revenue</p></div>
                                            </div>
                                            <div class="mt-4"><a class="btn btn-primary waves-effect waves-light btn-sm"
                                                                 href="/">View Profile <i
                                                        class="mdi mdi-arrow-right ml-1"></i></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-4 card-title">Monthly Earning</div>
                                <div class="row">
                                    <div class="col-sm-6"><p class="text-muted">This month</p>
                                        <h3>$34,252</h3>
                                        <p class="text-muted"><span class="text-success mr-2"> 12% <i
                                                    class="mdi mdi-arrow-up"></i> </span> From previous period</p>
                                        <div class="mt-4"><a class="btn btn-primary waves-effect waves-light btn-sm"
                                                             href="/">View More <i class="mdi mdi-arrow-right ml-1"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="mt-4 mt-sm-0" style="position: relative;">
                                            <div options="[object Object]" series="67" type="radialBar" height="180"
                                                 width="100%" style="min-height: 153.525px;">
                                                <div id="apexcharts71o1f42i"
                                                     class="apexcharts-canvas apexcharts71o1f42i apexcharts-theme-light"
                                                     style="width: 216.65px; height: 153.525px;">
                                                    <svg id="SvgjsSvg1342" width="216.65" height="153.525"
                                                         xmlns="http://www.w3.org/2000/svg" version="1.1"
                                                         xmlns:xlink="http://www.w3.org/1999/xlink"
                                                         xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg"
                                                         xmlns:data="ApexChartsNS" transform="translate(0, 0)"
                                                         style="background: transparent none repeat scroll 0% 0%;">
                                                        <g id="SvgjsG1344" class="apexcharts-inner apexcharts-graphical"
                                                           transform="translate(31.325000000000003, 0)">
                                                            <defs id="SvgjsDefs1343">
                                                                <clipPath id="gridRectMask71o1f42i">
                                                                    <rect id="SvgjsRect1346" width="162" height="180"
                                                                          x="-3" y="-1" rx="0" ry="0" opacity="1"
                                                                          stroke-width="0" stroke="none"
                                                                          stroke-dasharray="0" fill="#fff"></rect>
                                                                </clipPath>
                                                                <clipPath id="gridRectMarkerMask71o1f42i">
                                                                    <rect id="SvgjsRect1347" width="160" height="182"
                                                                          x="-2" y="-2" rx="0" ry="0" opacity="1"
                                                                          stroke-width="0" stroke="none"
                                                                          stroke-dasharray="0" fill="#fff"></rect>
                                                                </clipPath>
                                                                <linearGradient id="SvgjsLinearGradient1352" x1="1"
                                                                                y1="0" x2="0" y2="1">
                                                                    <stop id="SvgjsStop1353" stop-opacity="1"
                                                                          stop-color="rgba(242,242,242,1)"
                                                                          offset="0"></stop>
                                                                    <stop id="SvgjsStop1354" stop-opacity="1"
                                                                          stop-color="rgba(206,206,206,1)"
                                                                          offset="0.5"></stop>
                                                                    <stop id="SvgjsStop1355" stop-opacity="1"
                                                                          stop-color="rgba(206,206,206,1)"
                                                                          offset="0.65"></stop>
                                                                    <stop id="SvgjsStop1356" stop-opacity="1"
                                                                          stop-color="rgba(242,242,242,1)"
                                                                          offset="0.91"></stop>
                                                                </linearGradient>
                                                                <linearGradient id="SvgjsLinearGradient1364" x1="1"
                                                                                y1="0" x2="0" y2="1">
                                                                    <stop id="SvgjsStop1365" stop-opacity="1"
                                                                          stop-color="rgba(85,110,230,1)"
                                                                          offset="0"></stop>
                                                                    <stop id="SvgjsStop1366" stop-opacity="1"
                                                                          stop-color="rgba(72,94,196,1)"
                                                                          offset="0.5"></stop>
                                                                    <stop id="SvgjsStop1367" stop-opacity="1"
                                                                          stop-color="rgba(72,94,196,1)"
                                                                          offset="0.65"></stop>
                                                                    <stop id="SvgjsStop1368" stop-opacity="1"
                                                                          stop-color="rgba(85,110,230,1)"
                                                                          offset="0.91"></stop>
                                                                </linearGradient>
                                                            </defs>
                                                            <g id="SvgjsG1348" class="apexcharts-radialbar">
                                                                <g id="SvgjsG1349">
                                                                    <g id="SvgjsG1350" class="apexcharts-tracks">
                                                                        <g id="SvgjsG1351"
                                                                           class="apexcharts-radialbar-track apexcharts-track"
                                                                           rel="1">
                                                                            <path id="apexcharts-radialbarTrack-0"
                                                                                  d="M 45.25319510297665 110.74680489702334 A 46.3109756097561 46.3109756097561 0 1 1 110.74680489702334 110.74680489702334"
                                                                                  fill="none" fill-opacity="1"
                                                                                  stroke="rgba(242,242,242,0.85)"
                                                                                  stroke-opacity="1"
                                                                                  stroke-linecap="butt"
                                                                                  stroke-width="12.14865853658537"
                                                                                  stroke-dasharray="0"
                                                                                  class="apexcharts-radialbar-area"
                                                                                  data:pathOrig="M 45.25319510297665 110.74680489702334 A 46.3109756097561 46.3109756097561 0 1 1 110.74680489702334 110.74680489702334"></path>
                                                                        </g>
                                                                    </g>
                                                                    <g id="SvgjsG1358">
                                                                        <g id="SvgjsG1363"
                                                                           class="apexcharts-series apexcharts-radial-series"
                                                                           seriesName="SeriesxA" rel="1"
                                                                           data:realIndex="0">
                                                                            <path id="SvgjsPath1369"
                                                                                  d="M 45.25319510297665 110.74680489702334 A 46.3109756097561 46.3109756097561 0 1 1 111.3133279486101 45.82969314856046"
                                                                                  fill="none" fill-opacity="0.85"
                                                                                  stroke="url(#SvgjsLinearGradient1364)"
                                                                                  stroke-opacity="1"
                                                                                  stroke-linecap="butt"
                                                                                  stroke-width="12.524390243902442"
                                                                                  stroke-dasharray="4"
                                                                                  class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                                                                                  data:angle="181" data:value="67"
                                                                                  index="0" j="0"
                                                                                  data:pathOrig="M 45.25319510297665 110.74680489702334 A 46.3109756097561 46.3109756097561 0 1 1 111.3133279486101 45.82969314856046"></path>
                                                                        </g>
                                                                        <circle id="SvgjsCircle1359"
                                                                                r="35.23664634146341" cx="78" cy="78"
                                                                                class="apexcharts-radialbar-hollow"
                                                                                fill="transparent"></circle>
                                                                        <g id="SvgjsG1360"
                                                                           class="apexcharts-datalabels-group"
                                                                           transform="translate(0, 0) scale(1)"
                                                                           style="opacity: 1;">
                                                                            <text id="SvgjsText1361"
                                                                                  font-family="Helvetica, Arial, sans-serif"
                                                                                  x="78" y="138" text-anchor="middle"
                                                                                  dominant-baseline="auto"
                                                                                  font-size="13px" font-weight="400"
                                                                                  fill="#556ee6"
                                                                                  class="apexcharts-text apexcharts-datalabel-label"
                                                                                  style="font-family: Helvetica, Arial, sans-serif;">
                                                                                Series A
                                                                            </text>
                                                                            <text id="SvgjsText1362"
                                                                                  font-family="Helvetica, Arial, sans-serif"
                                                                                  x="78" y="116" text-anchor="middle"
                                                                                  dominant-baseline="auto"
                                                                                  font-size="16px" font-weight="400"
                                                                                  fill="#373d3f"
                                                                                  class="apexcharts-text apexcharts-datalabel-value"
                                                                                  style="font-family: Helvetica, Arial, sans-serif;">
                                                                                67%
                                                                            </text>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <line id="SvgjsLine1370" x1="0" y1="0" x2="156" y2="0"
                                                                  stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1"
                                                                  class="apexcharts-ycrosshairs"></line>
                                                            <line id="SvgjsLine1371" x1="0" y1="0" x2="156" y2="0"
                                                                  stroke-dasharray="0" stroke-width="0"
                                                                  class="apexcharts-ycrosshairs-hidden"></line>
                                                        </g>
                                                        <g id="SvgjsG1345" class="apexcharts-annotations"></g>
                                                    </svg>
                                                    <div class="apexcharts-legend"></div>
                                                </div>
                                            </div>
                                            <div class="resize-triggers">
                                                <div class="expand-trigger">
                                                    <div style="width: 218px; height: 155px;"></div>
                                                </div>
                                                <div class="contract-trigger"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-muted mb-2">We craft digital, graphic and dimensional thinking.</p></div>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="mini-stats-wid card">
                                    <div class="card-body">
                                        <div class="media">
                                            <div class="media-body"><p class="text-muted font-weight-medium">Orders</p>
                                                <h4 class="mb-0">1,235</h4></div>
                                            <div
                                                class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                <span class="avatar-title"><i
                                                        class="bx bx-copy-alt font-size-24"></i></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mini-stats-wid card">
                                    <div class="card-body">
                                        <div class="media">
                                            <div class="media-body"><p class="text-muted font-weight-medium">Revenue</p>
                                                <h4 class="mb-0">$35, 723</h4></div>
                                            <div
                                                class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                <span class="avatar-title"><i class="bx bx-archive-in font-size-24"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mini-stats-wid card">
                                    <div class="card-body">
                                        <div class="media">
                                            <div class="media-body"><p class="text-muted font-weight-medium">Average
                                                    Price</p><h4 class="mb-0">$16.2</h4></div>
                                            <div
                                                class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                <span class="avatar-title"><i
                                                        class="bx bx-purchase-tag-alt font-size-24"></i></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body" style="position: relative;">
                                <div class="mb-4 float-sm-left card-title">Email Sent</div>
                                <div class="float-sm-right">
                                    <ul class="nav nav-pills">
                                        <li class="nav-item"><a class="nav-link" href="/dashboard">Week</a></li>
                                        <li class="nav-item"><a class="nav-link" href="/dashboard">Month</a></li>
                                        <li class="nav-item"><a class="nav-link active" href="/dashboard">Year</a></li>
                                    </ul>
                                </div>
                                <div class="clearfix"></div>
                                <div options="[object Object]" series="[object Object],[object Object],[object Object]"
                                     type="bar" height="359" width="100%" style="min-height: 374px;">
                                    <div id="apexchartsixzmxiat"
                                         class="apexcharts-canvas apexchartsixzmxiat apexcharts-theme-light"
                                         style="width: 978.667px; height: 359px;">
                                        <svg id="SvgjsSvg1204" width="978.6669999999999" height="359"
                                             xmlns="http://www.w3.org/2000/svg" version="1.1"
                                             xmlns:xlink="http://www.w3.org/1999/xlink"
                                             xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg"
                                             xmlns:data="ApexChartsNS" transform="translate(0, 0)"
                                             style="background: transparent none repeat scroll 0% 0%;">
                                            <foreignObject x="0" y="0" width="978.6669999999999" height="359">
                                                <div class="apexcharts-legend apexcharts-align-center position-bottom"
                                                     xmlns="http://www.w3.org/1999/xhtml"
                                                     style="inset: auto 0px 1px; position: absolute; max-height: 179.5px;">
                                                    <div class="apexcharts-legend-series" style="margin: 2px 5px;"
                                                         rel="1" seriesname="SeriesxA" data:collapsed="false"><span
                                                            class="apexcharts-legend-marker"
                                                            style="background: rgb(85, 110, 230) none repeat scroll 0% 0% !important; color: rgb(85, 110, 230); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;"
                                                            rel="1" data:collapsed="false"></span><span
                                                            class="apexcharts-legend-text"
                                                            style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                                            rel="1" i="0" data:default-text="Series%20A"
                                                            data:collapsed="false">Series A</span></div>
                                                    <div class="apexcharts-legend-series" style="margin: 2px 5px;"
                                                         rel="2" seriesname="SeriesxB" data:collapsed="false"><span
                                                            class="apexcharts-legend-marker"
                                                            style="background: rgb(241, 180, 76) none repeat scroll 0% 0% !important; color: rgb(241, 180, 76); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;"
                                                            rel="2" data:collapsed="false"></span><span
                                                            class="apexcharts-legend-text"
                                                            style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                                            rel="2" i="1" data:default-text="Series%20B"
                                                            data:collapsed="false">Series B</span></div>
                                                    <div class="apexcharts-legend-series" style="margin: 2px 5px;"
                                                         rel="3" seriesname="SeriesxC" data:collapsed="false"><span
                                                            class="apexcharts-legend-marker"
                                                            style="background: rgb(52, 195, 143) none repeat scroll 0% 0% !important; color: rgb(52, 195, 143); height: 12px; width: 12px; left: 0px; top: 0px; border-width: 0px; border-color: rgb(255, 255, 255); border-radius: 2px;"
                                                            rel="3" data:collapsed="false"></span><span
                                                            class="apexcharts-legend-text"
                                                            style="color: rgb(55, 61, 63); font-size: 12px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;"
                                                            rel="3" i="2" data:default-text="Series%20C"
                                                            data:collapsed="false">Series C</span></div>
                                                </div>
                                                <style type="text/css">

                                                    .apexcharts-legend {
                                                        display: flex;
                                                        overflow: auto;
                                                        padding: 0 10px;
                                                    }

                                                    .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {
                                                        flex-wrap: wrap
                                                    }

                                                    .apexcharts-legend.position-right, .apexcharts-legend.position-left {
                                                        flex-direction: column;
                                                        bottom: 0;
                                                    }

                                                    .apexcharts-legend.position-bottom.apexcharts-align-left, .apexcharts-legend.position-top.apexcharts-align-left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {
                                                        justify-content: flex-start;
                                                    }

                                                    .apexcharts-legend.position-bottom.apexcharts-align-center, .apexcharts-legend.position-top.apexcharts-align-center {
                                                        justify-content: center;
                                                    }

                                                    .apexcharts-legend.position-bottom.apexcharts-align-right, .apexcharts-legend.position-top.apexcharts-align-right {
                                                        justify-content: flex-end;
                                                    }

                                                    .apexcharts-legend-series {
                                                        cursor: pointer;
                                                        line-height: normal;
                                                    }

                                                    .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series {
                                                        display: flex;
                                                        align-items: center;
                                                    }

                                                    .apexcharts-legend-text {
                                                        position: relative;
                                                        font-size: 14px;
                                                    }

                                                    .apexcharts-legend-text *, .apexcharts-legend-marker * {
                                                        pointer-events: none;
                                                    }

                                                    .apexcharts-legend-marker {
                                                        position: relative;
                                                        display: inline-block;
                                                        cursor: pointer;
                                                        margin-right: 3px;
                                                        border-style: solid;
                                                    }

                                                    .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {
                                                        display: inline-block;
                                                    }

                                                    .apexcharts-legend-series.apexcharts-no-click {
                                                        cursor: auto;
                                                    }

                                                    .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
                                                        display: none !important;
                                                    }

                                                    .apexcharts-inactive-legend {
                                                        opacity: 0.45;
                                                    }</style>
                                            </foreignObject>
                                            <g id="SvgjsG1206" class="apexcharts-inner apexcharts-graphical"
                                               transform="translate(45.35000038146973, 30)">
                                                <defs id="SvgjsDefs1205">
                                                    <linearGradient id="SvgjsLinearGradient1210" x1="0" y1="0" x2="0"
                                                                    y2="1">
                                                        <stop id="SvgjsStop1211" stop-opacity="0.4"
                                                              stop-color="rgba(216,227,240,0.4)" offset="0"></stop>
                                                        <stop id="SvgjsStop1212" stop-opacity="0.5"
                                                              stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                                                        <stop id="SvgjsStop1213" stop-opacity="0.5"
                                                              stop-color="rgba(190,209,230,0.5)" offset="1"></stop>
                                                    </linearGradient>
                                                    <clipPath id="gridRectMaskixzmxiat">
                                                        <rect id="SvgjsRect1215" width="927.3169996185302"
                                                              height="267.348" x="-2" y="0" rx="0" ry="0" opacity="1"
                                                              stroke-width="0" stroke="none" stroke-dasharray="0"
                                                              fill="#fff"></rect>
                                                    </clipPath>
                                                    <clipPath id="gridRectMarkerMaskixzmxiat">
                                                        <rect id="SvgjsRect1216" width="927.3169996185302"
                                                              height="271.348" x="-2" y="-2" rx="0" ry="0" opacity="1"
                                                              stroke-width="0" stroke="none" stroke-dasharray="0"
                                                              fill="#fff"></rect>
                                                    </clipPath>
                                                </defs>
                                                <rect id="SvgjsRect1214" width="11.541462495231626" height="267.348"
                                                      x="109.07784957437516" y="0" rx="0" ry="0" opacity="1"
                                                      stroke-width="0" stroke-dasharray="3"
                                                      fill="url(#SvgjsLinearGradient1210)"
                                                      class="apexcharts-xcrosshairs" y2="267.348" filter="none"
                                                      fill-opacity="0.9" x1="109.07784957437516"
                                                      x2="109.07784957437516"></rect>
                                                <g id="SvgjsG1260" class="apexcharts-xaxis" transform="translate(0, 0)">
                                                    <g id="SvgjsG1261" class="apexcharts-xaxis-texts-g"
                                                       transform="translate(0, -4)">
                                                        <text id="SvgjsText1263"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="38.47154165077209" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1264">Jan</tspan>
                                                            <title>Jan</title></text>
                                                        <text id="SvgjsText1266"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="115.41462495231627" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1267">Feb</tspan>
                                                            <title>Feb</title></text>
                                                        <text id="SvgjsText1269"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="192.35770825386047" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1270">Mar</tspan>
                                                            <title>Mar</title></text>
                                                        <text id="SvgjsText1272"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="269.3007915554046" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1273">Apr</tspan>
                                                            <title>Apr</title></text>
                                                        <text id="SvgjsText1275"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="346.24387485694876" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1276">May</tspan>
                                                            <title>May</title></text>
                                                        <text id="SvgjsText1278"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="423.1869581584929" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1279">Jun</tspan>
                                                            <title>Jun</title></text>
                                                        <text id="SvgjsText1281"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="500.1300414600371" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1282">Jul</tspan>
                                                            <title>Jul</title></text>
                                                        <text id="SvgjsText1284"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="577.0731247615813" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1285">Aug</tspan>
                                                            <title>Aug</title></text>
                                                        <text id="SvgjsText1287"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="654.0162080631255" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1288">Sep</tspan>
                                                            <title>Sep</title></text>
                                                        <text id="SvgjsText1290"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="730.9592913646698" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1291">Oct</tspan>
                                                            <title>Oct</title></text>
                                                        <text id="SvgjsText1293"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="807.902374666214" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1294">Nov</tspan>
                                                            <title>Nov</title></text>
                                                        <text id="SvgjsText1296"
                                                              font-family="Helvetica, Arial, sans-serif"
                                                              x="884.8454579677582" y="296.348" text-anchor="middle"
                                                              dominant-baseline="auto" font-size="12px"
                                                              font-weight="400" fill="#373d3f"
                                                              class="apexcharts-text apexcharts-xaxis-label "
                                                              style="font-family: Helvetica, Arial, sans-serif;">
                                                            <tspan id="SvgjsTspan1297">Dec</tspan>
                                                            <title>Dec</title></text>
                                                    </g>
                                                    <line id="SvgjsLine1298" x1="0" y1="268.348" x2="923.3169996185302"
                                                          y2="268.348" stroke="#e0e0e0" stroke-dasharray="0"
                                                          stroke-width="1"></line>
                                                </g>
                                                <g id="SvgjsG1313" class="apexcharts-grid">
                                                    <g id="SvgjsG1314" class="apexcharts-gridlines-horizontal">
                                                        <line id="SvgjsLine1329" x1="0" y1="0" x2="923.3169996185302"
                                                              y2="0" stroke="#e0e0e0" stroke-dasharray="0"
                                                              class="apexcharts-gridline"></line>
                                                        <line id="SvgjsLine1330" x1="0" y1="53.4696"
                                                              x2="923.3169996185302" y2="53.4696" stroke="#e0e0e0"
                                                              stroke-dasharray="0" class="apexcharts-gridline"></line>
                                                        <line id="SvgjsLine1331" x1="0" y1="106.9392"
                                                              x2="923.3169996185302" y2="106.9392" stroke="#e0e0e0"
                                                              stroke-dasharray="0" class="apexcharts-gridline"></line>
                                                        <line id="SvgjsLine1332" x1="0" y1="160.40879999999999"
                                                              x2="923.3169996185302" y2="160.40879999999999"
                                                              stroke="#e0e0e0" stroke-dasharray="0"
                                                              class="apexcharts-gridline"></line>
                                                        <line id="SvgjsLine1333" x1="0" y1="213.8784"
                                                              x2="923.3169996185302" y2="213.8784" stroke="#e0e0e0"
                                                              stroke-dasharray="0" class="apexcharts-gridline"></line>
                                                        <line id="SvgjsLine1334" x1="0" y1="267.348"
                                                              x2="923.3169996185302" y2="267.348" stroke="#e0e0e0"
                                                              stroke-dasharray="0" class="apexcharts-gridline"></line>
                                                    </g>
                                                    <g id="SvgjsG1315" class="apexcharts-gridlines-vertical"></g>
                                                    <line id="SvgjsLine1316" x1="0" y1="268.348" x2="0" y2="274.348"
                                                          stroke="#e0e0e0" stroke-dasharray="0"
                                                          class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1317" x1="76.94308330154418" y1="268.348"
                                                          x2="76.94308330154418" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1318" x1="153.88616660308836" y1="268.348"
                                                          x2="153.88616660308836" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1319" x1="230.82924990463255" y1="268.348"
                                                          x2="230.82924990463255" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1320" x1="307.7723332061767" y1="268.348"
                                                          x2="307.7723332061767" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1321" x1="384.7154165077209" y1="268.348"
                                                          x2="384.7154165077209" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1322" x1="461.65849980926504" y1="268.348"
                                                          x2="461.65849980926504" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1323" x1="538.6015831108092" y1="268.348"
                                                          x2="538.6015831108092" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1324" x1="615.5446664123534" y1="268.348"
                                                          x2="615.5446664123534" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1325" x1="692.4877497138976" y1="268.348"
                                                          x2="692.4877497138976" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1326" x1="769.4308330154419" y1="268.348"
                                                          x2="769.4308330154419" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1327" x1="846.3739163169861" y1="268.348"
                                                          x2="846.3739163169861" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1328" x1="923.3169996185303" y1="268.348"
                                                          x2="923.3169996185303" y2="274.348" stroke="#e0e0e0"
                                                          stroke-dasharray="0" class="apexcharts-xaxis-tick"></line>
                                                    <line id="SvgjsLine1336" x1="0" y1="267.348" x2="923.3169996185302"
                                                          y2="267.348" stroke="transparent" stroke-dasharray="0"></line>
                                                    <line id="SvgjsLine1335" x1="0" y1="1" x2="0" y2="267.348"
                                                          stroke="transparent" stroke-dasharray="0"></line>
                                                </g>
                                                <g id="SvgjsG1217" class="apexcharts-bar-series apexcharts-plot-series">
                                                    <g id="SvgjsG1218" class="apexcharts-series" seriesName="SeriesxA"
                                                       rel="1" data:realIndex="0">
                                                        <path id="SvgjsPath1220"
                                                              d="M 32.700810403156275 267.348L 32.700810403156275 149.71488L 44.2422728983879 149.71488L 44.2422728983879 149.71488L 44.2422728983879 267.348L 44.2422728983879 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 32.700810403156275 267.348L 32.700810403156275 149.71488L 44.2422728983879 149.71488L 44.2422728983879 149.71488L 44.2422728983879 267.348L 44.2422728983879 267.348z"
                                                              pathFrom="M 32.700810403156275 267.348L 32.700810403156275 267.348L 44.2422728983879 267.348L 44.2422728983879 267.348L 44.2422728983879 267.348L 32.700810403156275 267.348"
                                                              cy="149.71488" cx="109.64389370470045" j="0" val="44"
                                                              barHeight="117.63312"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1221"
                                                              d="M 109.64389370470045 267.348L 109.64389370470045 120.3066L 121.18535619993207 120.3066L 121.18535619993207 120.3066L 121.18535619993207 267.348L 121.18535619993207 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 109.64389370470045 267.348L 109.64389370470045 120.3066L 121.18535619993207 120.3066L 121.18535619993207 120.3066L 121.18535619993207 267.348L 121.18535619993207 267.348z"
                                                              pathFrom="M 109.64389370470045 267.348L 109.64389370470045 267.348L 121.18535619993207 267.348L 121.18535619993207 267.348L 121.18535619993207 267.348L 109.64389370470045 267.348"
                                                              cy="120.3066" cx="186.58697700624464" j="1" val="55"
                                                              barHeight="147.0414" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1222"
                                                              d="M 186.58697700624464 267.348L 186.58697700624464 157.73532L 198.12843950147627 157.73532L 198.12843950147627 157.73532L 198.12843950147627 267.348L 198.12843950147627 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 186.58697700624464 267.348L 186.58697700624464 157.73532L 198.12843950147627 157.73532L 198.12843950147627 157.73532L 198.12843950147627 267.348L 198.12843950147627 267.348z"
                                                              pathFrom="M 186.58697700624464 267.348L 186.58697700624464 267.348L 198.12843950147627 267.348L 198.12843950147627 267.348L 198.12843950147627 267.348L 186.58697700624464 267.348"
                                                              cy="157.73532" cx="263.5300603077888" j="2" val="41"
                                                              barHeight="109.61268"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1223"
                                                              d="M 263.5300603077888 267.348L 263.5300603077888 88.22484L 275.0715228030204 88.22484L 275.0715228030204 88.22484L 275.0715228030204 267.348L 275.0715228030204 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 263.5300603077888 267.348L 263.5300603077888 88.22484L 275.0715228030204 88.22484L 275.0715228030204 88.22484L 275.0715228030204 267.348L 275.0715228030204 267.348z"
                                                              pathFrom="M 263.5300603077888 267.348L 263.5300603077888 267.348L 275.0715228030204 267.348L 275.0715228030204 267.348L 275.0715228030204 267.348L 263.5300603077888 267.348"
                                                              cy="88.22484" cx="340.47314360933296" j="3" val="67"
                                                              barHeight="179.12316"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1224"
                                                              d="M 340.47314360933296 267.348L 340.47314360933296 208.53144L 352.01460610456456 208.53144L 352.01460610456456 208.53144L 352.01460610456456 267.348L 352.01460610456456 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 340.47314360933296 267.348L 340.47314360933296 208.53144L 352.01460610456456 208.53144L 352.01460610456456 208.53144L 352.01460610456456 267.348L 352.01460610456456 267.348z"
                                                              pathFrom="M 340.47314360933296 267.348L 340.47314360933296 267.348L 352.01460610456456 267.348L 352.01460610456456 267.348L 352.01460610456456 267.348L 340.47314360933296 267.348"
                                                              cy="208.53144" cx="417.4162269108771" j="4" val="22"
                                                              barHeight="58.81656" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1225"
                                                              d="M 417.4162269108771 267.348L 417.4162269108771 152.38836L 428.9576894061087 152.38836L 428.9576894061087 152.38836L 428.9576894061087 267.348L 428.9576894061087 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 417.4162269108771 267.348L 417.4162269108771 152.38836L 428.9576894061087 152.38836L 428.9576894061087 152.38836L 428.9576894061087 267.348L 428.9576894061087 267.348z"
                                                              pathFrom="M 417.4162269108771 267.348L 417.4162269108771 267.348L 428.9576894061087 267.348L 428.9576894061087 267.348L 428.9576894061087 267.348L 417.4162269108771 267.348"
                                                              cy="152.38836" cx="494.3593102124213" j="5" val="43"
                                                              barHeight="114.95964000000001"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1226"
                                                              d="M 494.3593102124213 267.348L 494.3593102124213 171.10272L 505.9007727076529 171.10272L 505.9007727076529 171.10272L 505.9007727076529 267.348L 505.9007727076529 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 494.3593102124213 267.348L 494.3593102124213 171.10272L 505.9007727076529 171.10272L 505.9007727076529 171.10272L 505.9007727076529 267.348L 505.9007727076529 267.348z"
                                                              pathFrom="M 494.3593102124213 267.348L 494.3593102124213 267.348L 505.9007727076529 267.348L 505.9007727076529 267.348L 505.9007727076529 267.348L 494.3593102124213 267.348"
                                                              cy="171.10272" cx="571.3023935139655" j="6" val="36"
                                                              barHeight="96.24528000000001"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1227"
                                                              d="M 571.3023935139655 267.348L 571.3023935139655 128.32704L 582.8438560091971 128.32704L 582.8438560091971 128.32704L 582.8438560091971 267.348L 582.8438560091971 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 571.3023935139655 267.348L 571.3023935139655 128.32704L 582.8438560091971 128.32704L 582.8438560091971 128.32704L 582.8438560091971 267.348L 582.8438560091971 267.348z"
                                                              pathFrom="M 571.3023935139655 267.348L 571.3023935139655 267.348L 582.8438560091971 267.348L 582.8438560091971 267.348L 582.8438560091971 267.348L 571.3023935139655 267.348"
                                                              cy="128.32704" cx="648.2454768155097" j="7" val="52"
                                                              barHeight="139.02096"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1228"
                                                              d="M 648.2454768155097 267.348L 648.2454768155097 203.18448L 659.7869393107413 203.18448L 659.7869393107413 203.18448L 659.7869393107413 267.348L 659.7869393107413 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 648.2454768155097 267.348L 648.2454768155097 203.18448L 659.7869393107413 203.18448L 659.7869393107413 203.18448L 659.7869393107413 267.348L 659.7869393107413 267.348z"
                                                              pathFrom="M 648.2454768155097 267.348L 648.2454768155097 267.348L 659.7869393107413 267.348L 659.7869393107413 267.348L 659.7869393107413 267.348L 648.2454768155097 267.348"
                                                              cy="203.18448" cx="725.188560117054" j="8" val="24"
                                                              barHeight="64.16352" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1229"
                                                              d="M 725.188560117054 267.348L 725.188560117054 219.22536000000002L 736.7300226122856 219.22536000000002L 736.7300226122856 219.22536000000002L 736.7300226122856 267.348L 736.7300226122856 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 725.188560117054 267.348L 725.188560117054 219.22536000000002L 736.7300226122856 219.22536000000002L 736.7300226122856 219.22536000000002L 736.7300226122856 267.348L 736.7300226122856 267.348z"
                                                              pathFrom="M 725.188560117054 267.348L 725.188560117054 267.348L 736.7300226122856 267.348L 736.7300226122856 267.348L 736.7300226122856 267.348L 725.188560117054 267.348"
                                                              cy="219.22536000000002" cx="802.1316434185982" j="9"
                                                              val="18" barHeight="48.122640000000004"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1230"
                                                              d="M 802.1316434185982 267.348L 802.1316434185982 171.10272L 813.6731059138298 171.10272L 813.6731059138298 171.10272L 813.6731059138298 267.348L 813.6731059138298 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 802.1316434185982 267.348L 802.1316434185982 171.10272L 813.6731059138298 171.10272L 813.6731059138298 171.10272L 813.6731059138298 267.348L 813.6731059138298 267.348z"
                                                              pathFrom="M 802.1316434185982 267.348L 802.1316434185982 267.348L 813.6731059138298 267.348L 813.6731059138298 267.348L 813.6731059138298 267.348L 802.1316434185982 267.348"
                                                              cy="171.10272" cx="879.0747267201424" j="10" val="36"
                                                              barHeight="96.24528000000001"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1231"
                                                              d="M 879.0747267201424 267.348L 879.0747267201424 139.02096L 890.616189215374 139.02096L 890.616189215374 139.02096L 890.616189215374 267.348L 890.616189215374 267.348z"
                                                              fill="rgba(85,110,230,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="0"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 879.0747267201424 267.348L 879.0747267201424 139.02096L 890.616189215374 139.02096L 890.616189215374 139.02096L 890.616189215374 267.348L 890.616189215374 267.348z"
                                                              pathFrom="M 879.0747267201424 267.348L 879.0747267201424 267.348L 890.616189215374 267.348L 890.616189215374 267.348L 890.616189215374 267.348L 879.0747267201424 267.348"
                                                              cy="139.02096" cx="956.0178100216866" j="11" val="48"
                                                              barHeight="128.32704"
                                                              barWidth="11.541462495231626"></path>
                                                    </g>
                                                    <g id="SvgjsG1232" class="apexcharts-series" seriesName="SeriesxB"
                                                       rel="2" data:realIndex="1">
                                                        <path id="SvgjsPath1234"
                                                              d="M 32.700810403156275 149.71488L 32.700810403156275 114.95964L 44.2422728983879 114.95964L 44.2422728983879 114.95964L 44.2422728983879 149.71488L 44.2422728983879 149.71488z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 32.700810403156275 149.71488L 32.700810403156275 114.95964L 44.2422728983879 114.95964L 44.2422728983879 114.95964L 44.2422728983879 149.71488L 44.2422728983879 149.71488z"
                                                              pathFrom="M 32.700810403156275 149.71488L 32.700810403156275 149.71488L 44.2422728983879 149.71488L 44.2422728983879 149.71488L 44.2422728983879 149.71488L 32.700810403156275 149.71488"
                                                              cy="114.95964" cx="109.64389370470045" j="0" val="13"
                                                              barHeight="34.75524" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1235"
                                                              d="M 109.64389370470045 120.3066L 109.64389370470045 58.81656L 121.18535619993207 58.81656L 121.18535619993207 58.81656L 121.18535619993207 120.3066L 121.18535619993207 120.3066z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 109.64389370470045 120.3066L 109.64389370470045 58.81656L 121.18535619993207 58.81656L 121.18535619993207 58.81656L 121.18535619993207 120.3066L 121.18535619993207 120.3066z"
                                                              pathFrom="M 109.64389370470045 120.3066L 109.64389370470045 120.3066L 121.18535619993207 120.3066L 121.18535619993207 120.3066L 121.18535619993207 120.3066L 109.64389370470045 120.3066"
                                                              cy="58.81656" cx="186.58697700624464" j="1" val="23"
                                                              barHeight="61.49004" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1236"
                                                              d="M 186.58697700624464 157.73532L 186.58697700624464 104.26572L 198.12843950147627 104.26572L 198.12843950147627 104.26572L 198.12843950147627 157.73532L 198.12843950147627 157.73532z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 186.58697700624464 157.73532L 186.58697700624464 104.26572L 198.12843950147627 104.26572L 198.12843950147627 104.26572L 198.12843950147627 157.73532L 198.12843950147627 157.73532z"
                                                              pathFrom="M 186.58697700624464 157.73532L 186.58697700624464 157.73532L 198.12843950147627 157.73532L 198.12843950147627 157.73532L 198.12843950147627 157.73532L 186.58697700624464 157.73532"
                                                              cy="104.26572" cx="263.5300603077888" j="2" val="20"
                                                              barHeight="53.4696" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1237"
                                                              d="M 263.5300603077888 88.22484L 263.5300603077888 66.837L 275.0715228030204 66.837L 275.0715228030204 66.837L 275.0715228030204 88.22484L 275.0715228030204 88.22484z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 263.5300603077888 88.22484L 263.5300603077888 66.837L 275.0715228030204 66.837L 275.0715228030204 66.837L 275.0715228030204 88.22484L 275.0715228030204 88.22484z"
                                                              pathFrom="M 263.5300603077888 88.22484L 263.5300603077888 88.22484L 275.0715228030204 88.22484L 275.0715228030204 88.22484L 275.0715228030204 88.22484L 263.5300603077888 88.22484"
                                                              cy="66.837" cx="340.47314360933296" j="3" val="8"
                                                              barHeight="21.38784" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1238"
                                                              d="M 340.47314360933296 208.53144L 340.47314360933296 173.77620000000002L 352.01460610456456 173.77620000000002L 352.01460610456456 173.77620000000002L 352.01460610456456 208.53144L 352.01460610456456 208.53144z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 340.47314360933296 208.53144L 340.47314360933296 173.77620000000002L 352.01460610456456 173.77620000000002L 352.01460610456456 173.77620000000002L 352.01460610456456 208.53144L 352.01460610456456 208.53144z"
                                                              pathFrom="M 340.47314360933296 208.53144L 340.47314360933296 208.53144L 352.01460610456456 208.53144L 352.01460610456456 208.53144L 352.01460610456456 208.53144L 340.47314360933296 208.53144"
                                                              cy="173.77620000000002" cx="417.4162269108771" j="4"
                                                              val="13" barHeight="34.75524"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1239"
                                                              d="M 417.4162269108771 152.38836L 417.4162269108771 80.2044L 428.9576894061087 80.2044L 428.9576894061087 80.2044L 428.9576894061087 152.38836L 428.9576894061087 152.38836z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 417.4162269108771 152.38836L 417.4162269108771 80.2044L 428.9576894061087 80.2044L 428.9576894061087 80.2044L 428.9576894061087 152.38836L 428.9576894061087 152.38836z"
                                                              pathFrom="M 417.4162269108771 152.38836L 417.4162269108771 152.38836L 428.9576894061087 152.38836L 428.9576894061087 152.38836L 428.9576894061087 152.38836L 417.4162269108771 152.38836"
                                                              cy="80.2044" cx="494.3593102124213" j="5" val="27"
                                                              barHeight="72.18396" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1240"
                                                              d="M 494.3593102124213 171.10272L 494.3593102124213 122.98008L 505.9007727076529 122.98008L 505.9007727076529 122.98008L 505.9007727076529 171.10272L 505.9007727076529 171.10272z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 494.3593102124213 171.10272L 494.3593102124213 122.98008L 505.9007727076529 122.98008L 505.9007727076529 122.98008L 505.9007727076529 171.10272L 505.9007727076529 171.10272z"
                                                              pathFrom="M 494.3593102124213 171.10272L 494.3593102124213 171.10272L 505.9007727076529 171.10272L 505.9007727076529 171.10272L 505.9007727076529 171.10272L 494.3593102124213 171.10272"
                                                              cy="122.98008" cx="571.3023935139655" j="6" val="18"
                                                              barHeight="48.122640000000004"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1241"
                                                              d="M 571.3023935139655 128.32704L 571.3023935139655 69.51048L 582.8438560091971 69.51048L 582.8438560091971 69.51048L 582.8438560091971 128.32704L 582.8438560091971 128.32704z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 571.3023935139655 128.32704L 571.3023935139655 69.51048L 582.8438560091971 69.51048L 582.8438560091971 69.51048L 582.8438560091971 128.32704L 582.8438560091971 128.32704z"
                                                              pathFrom="M 571.3023935139655 128.32704L 571.3023935139655 128.32704L 582.8438560091971 128.32704L 582.8438560091971 128.32704L 582.8438560091971 128.32704L 571.3023935139655 128.32704"
                                                              cy="69.51048" cx="648.2454768155097" j="7" val="22"
                                                              barHeight="58.81656" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1242"
                                                              d="M 648.2454768155097 203.18448L 648.2454768155097 176.44968L 659.7869393107413 176.44968L 659.7869393107413 176.44968L 659.7869393107413 203.18448L 659.7869393107413 203.18448z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 648.2454768155097 203.18448L 648.2454768155097 176.44968L 659.7869393107413 176.44968L 659.7869393107413 176.44968L 659.7869393107413 203.18448L 659.7869393107413 203.18448z"
                                                              pathFrom="M 648.2454768155097 203.18448L 648.2454768155097 203.18448L 659.7869393107413 203.18448L 659.7869393107413 203.18448L 659.7869393107413 203.18448L 648.2454768155097 203.18448"
                                                              cy="176.44968" cx="725.188560117054" j="8" val="10"
                                                              barHeight="26.7348" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1243"
                                                              d="M 725.188560117054 219.22536000000002L 725.188560117054 176.44968000000003L 736.7300226122856 176.44968000000003L 736.7300226122856 176.44968000000003L 736.7300226122856 219.22536000000002L 736.7300226122856 219.22536000000002z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 725.188560117054 219.22536000000002L 725.188560117054 176.44968000000003L 736.7300226122856 176.44968000000003L 736.7300226122856 176.44968000000003L 736.7300226122856 219.22536000000002L 736.7300226122856 219.22536000000002z"
                                                              pathFrom="M 725.188560117054 219.22536000000002L 725.188560117054 219.22536000000002L 736.7300226122856 219.22536000000002L 736.7300226122856 219.22536000000002L 736.7300226122856 219.22536000000002L 725.188560117054 219.22536000000002"
                                                              cy="176.44968000000003" cx="802.1316434185982" j="9"
                                                              val="16" barHeight="42.77568"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1244"
                                                              d="M 802.1316434185982 171.10272L 802.1316434185982 106.9392L 813.6731059138298 106.9392L 813.6731059138298 106.9392L 813.6731059138298 171.10272L 813.6731059138298 171.10272z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 802.1316434185982 171.10272L 802.1316434185982 106.9392L 813.6731059138298 106.9392L 813.6731059138298 106.9392L 813.6731059138298 171.10272L 813.6731059138298 171.10272z"
                                                              pathFrom="M 802.1316434185982 171.10272L 802.1316434185982 171.10272L 813.6731059138298 171.10272L 813.6731059138298 171.10272L 813.6731059138298 171.10272L 802.1316434185982 171.10272"
                                                              cy="106.9392" cx="879.0747267201424" j="10" val="24"
                                                              barHeight="64.16352" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1245"
                                                              d="M 879.0747267201424 139.02096L 879.0747267201424 80.20439999999999L 890.616189215374 80.20439999999999L 890.616189215374 80.20439999999999L 890.616189215374 139.02096L 890.616189215374 139.02096z"
                                                              fill="rgba(241,180,76,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="1"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 879.0747267201424 139.02096L 879.0747267201424 80.20439999999999L 890.616189215374 80.20439999999999L 890.616189215374 80.20439999999999L 890.616189215374 139.02096L 890.616189215374 139.02096z"
                                                              pathFrom="M 879.0747267201424 139.02096L 879.0747267201424 139.02096L 890.616189215374 139.02096L 890.616189215374 139.02096L 890.616189215374 139.02096L 879.0747267201424 139.02096"
                                                              cy="80.20439999999999" cx="956.0178100216866" j="11"
                                                              val="22" barHeight="58.81656"
                                                              barWidth="11.541462495231626"></path>
                                                    </g>
                                                    <g id="SvgjsG1246" class="apexcharts-series" seriesName="SeriesxC"
                                                       rel="3" data:realIndex="2">
                                                        <path id="SvgjsPath1248"
                                                              d="M 32.700810403156275 114.95964L 32.700810403156275 85.55135999999999L 44.2422728983879 85.55135999999999L 44.2422728983879 85.55135999999999L 44.2422728983879 114.95964L 44.2422728983879 114.95964z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 32.700810403156275 114.95964L 32.700810403156275 85.55135999999999L 44.2422728983879 85.55135999999999L 44.2422728983879 85.55135999999999L 44.2422728983879 114.95964L 44.2422728983879 114.95964z"
                                                              pathFrom="M 32.700810403156275 114.95964L 32.700810403156275 114.95964L 44.2422728983879 114.95964L 44.2422728983879 114.95964L 44.2422728983879 114.95964L 32.700810403156275 114.95964"
                                                              cy="85.55135999999999" cx="109.64389370470045" j="0"
                                                              val="11" barHeight="29.40828"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1249"
                                                              d="M 109.64389370470045 58.81656L 109.64389370470045 13.367400000000004L 121.18535619993207 13.367400000000004L 121.18535619993207 13.367400000000004L 121.18535619993207 58.81656L 121.18535619993207 58.81656z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 109.64389370470045 58.81656L 109.64389370470045 13.367400000000004L 121.18535619993207 13.367400000000004L 121.18535619993207 13.367400000000004L 121.18535619993207 58.81656L 121.18535619993207 58.81656z"
                                                              pathFrom="M 109.64389370470045 58.81656L 109.64389370470045 58.81656L 121.18535619993207 58.81656L 121.18535619993207 58.81656L 121.18535619993207 58.81656L 109.64389370470045 58.81656"
                                                              cy="13.367400000000004" cx="186.58697700624464" j="1"
                                                              val="17" barHeight="45.44916"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1250"
                                                              d="M 186.58697700624464 104.26572L 186.58697700624464 64.16352L 198.12843950147627 64.16352L 198.12843950147627 64.16352L 198.12843950147627 104.26572L 198.12843950147627 104.26572z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 186.58697700624464 104.26572L 186.58697700624464 64.16352L 198.12843950147627 64.16352L 198.12843950147627 64.16352L 198.12843950147627 104.26572L 198.12843950147627 104.26572z"
                                                              pathFrom="M 186.58697700624464 104.26572L 186.58697700624464 104.26572L 198.12843950147627 104.26572L 198.12843950147627 104.26572L 198.12843950147627 104.26572L 186.58697700624464 104.26572"
                                                              cy="64.16352" cx="263.5300603077888" j="2" val="15"
                                                              barHeight="40.1022" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1251"
                                                              d="M 263.5300603077888 66.837L 263.5300603077888 26.7348L 275.0715228030204 26.7348L 275.0715228030204 26.7348L 275.0715228030204 66.837L 275.0715228030204 66.837z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 263.5300603077888 66.837L 263.5300603077888 26.7348L 275.0715228030204 26.7348L 275.0715228030204 26.7348L 275.0715228030204 66.837L 275.0715228030204 66.837z"
                                                              pathFrom="M 263.5300603077888 66.837L 263.5300603077888 66.837L 275.0715228030204 66.837L 275.0715228030204 66.837L 275.0715228030204 66.837L 263.5300603077888 66.837"
                                                              cy="26.7348" cx="340.47314360933296" j="3" val="15"
                                                              barHeight="40.1022" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1252"
                                                              d="M 340.47314360933296 173.77620000000002L 340.47314360933296 117.63312000000002L 352.01460610456456 117.63312000000002L 352.01460610456456 117.63312000000002L 352.01460610456456 173.77620000000002L 352.01460610456456 173.77620000000002z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 340.47314360933296 173.77620000000002L 340.47314360933296 117.63312000000002L 352.01460610456456 117.63312000000002L 352.01460610456456 117.63312000000002L 352.01460610456456 173.77620000000002L 352.01460610456456 173.77620000000002z"
                                                              pathFrom="M 340.47314360933296 173.77620000000002L 340.47314360933296 173.77620000000002L 352.01460610456456 173.77620000000002L 352.01460610456456 173.77620000000002L 352.01460610456456 173.77620000000002L 340.47314360933296 173.77620000000002"
                                                              cy="117.63312000000002" cx="417.4162269108771" j="4"
                                                              val="21" barHeight="56.143080000000005"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1253"
                                                              d="M 417.4162269108771 80.2044L 417.4162269108771 42.77568000000001L 428.9576894061087 42.77568000000001L 428.9576894061087 42.77568000000001L 428.9576894061087 80.2044L 428.9576894061087 80.2044z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 417.4162269108771 80.2044L 417.4162269108771 42.77568000000001L 428.9576894061087 42.77568000000001L 428.9576894061087 42.77568000000001L 428.9576894061087 80.2044L 428.9576894061087 80.2044z"
                                                              pathFrom="M 417.4162269108771 80.2044L 417.4162269108771 80.2044L 428.9576894061087 80.2044L 428.9576894061087 80.2044L 428.9576894061087 80.2044L 417.4162269108771 80.2044"
                                                              cy="42.77568000000001" cx="494.3593102124213" j="5"
                                                              val="14" barHeight="37.42872"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1254"
                                                              d="M 494.3593102124213 122.98008L 494.3593102124213 93.5718L 505.9007727076529 93.5718L 505.9007727076529 93.5718L 505.9007727076529 122.98008L 505.9007727076529 122.98008z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 494.3593102124213 122.98008L 494.3593102124213 93.5718L 505.9007727076529 93.5718L 505.9007727076529 93.5718L 505.9007727076529 122.98008L 505.9007727076529 122.98008z"
                                                              pathFrom="M 494.3593102124213 122.98008L 494.3593102124213 122.98008L 505.9007727076529 122.98008L 505.9007727076529 122.98008L 505.9007727076529 122.98008L 494.3593102124213 122.98008"
                                                              cy="93.5718" cx="571.3023935139655" j="6" val="11"
                                                              barHeight="29.40828" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1255"
                                                              d="M 571.3023935139655 69.51048L 571.3023935139655 21.387839999999997L 582.8438560091971 21.387839999999997L 582.8438560091971 21.387839999999997L 582.8438560091971 69.51048L 582.8438560091971 69.51048z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 571.3023935139655 69.51048L 571.3023935139655 21.387839999999997L 582.8438560091971 21.387839999999997L 582.8438560091971 21.387839999999997L 582.8438560091971 69.51048L 582.8438560091971 69.51048z"
                                                              pathFrom="M 571.3023935139655 69.51048L 571.3023935139655 69.51048L 582.8438560091971 69.51048L 582.8438560091971 69.51048L 582.8438560091971 69.51048L 571.3023935139655 69.51048"
                                                              cy="21.387839999999997" cx="648.2454768155097" j="7"
                                                              val="18" barHeight="48.122640000000004"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1256"
                                                              d="M 648.2454768155097 176.44968L 648.2454768155097 131.00052L 659.7869393107413 131.00052L 659.7869393107413 131.00052L 659.7869393107413 176.44968L 659.7869393107413 176.44968z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 648.2454768155097 176.44968L 648.2454768155097 131.00052L 659.7869393107413 131.00052L 659.7869393107413 131.00052L 659.7869393107413 176.44968L 659.7869393107413 176.44968z"
                                                              pathFrom="M 648.2454768155097 176.44968L 648.2454768155097 176.44968L 659.7869393107413 176.44968L 659.7869393107413 176.44968L 659.7869393107413 176.44968L 648.2454768155097 176.44968"
                                                              cy="131.00052" cx="725.188560117054" j="8" val="17"
                                                              barHeight="45.44916" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1257"
                                                              d="M 725.188560117054 176.44968000000003L 725.188560117054 144.36792000000003L 736.7300226122856 144.36792000000003L 736.7300226122856 144.36792000000003L 736.7300226122856 176.44968000000003L 736.7300226122856 176.44968000000003z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 725.188560117054 176.44968000000003L 725.188560117054 144.36792000000003L 736.7300226122856 144.36792000000003L 736.7300226122856 144.36792000000003L 736.7300226122856 176.44968000000003L 736.7300226122856 176.44968000000003z"
                                                              pathFrom="M 725.188560117054 176.44968000000003L 725.188560117054 176.44968000000003L 736.7300226122856 176.44968000000003L 736.7300226122856 176.44968000000003L 736.7300226122856 176.44968000000003L 725.188560117054 176.44968000000003"
                                                              cy="144.36792000000003" cx="802.1316434185982" j="9"
                                                              val="12" barHeight="32.08176"
                                                              barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1258"
                                                              d="M 802.1316434185982 106.9392L 802.1316434185982 53.4696L 813.6731059138298 53.4696L 813.6731059138298 53.4696L 813.6731059138298 106.9392L 813.6731059138298 106.9392z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 802.1316434185982 106.9392L 802.1316434185982 53.4696L 813.6731059138298 53.4696L 813.6731059138298 53.4696L 813.6731059138298 106.9392L 813.6731059138298 106.9392z"
                                                              pathFrom="M 802.1316434185982 106.9392L 802.1316434185982 106.9392L 813.6731059138298 106.9392L 813.6731059138298 106.9392L 813.6731059138298 106.9392L 802.1316434185982 106.9392"
                                                              cy="53.4696" cx="879.0747267201424" j="10" val="20"
                                                              barHeight="53.4696" barWidth="11.541462495231626"></path>
                                                        <path id="SvgjsPath1259"
                                                              d="M 879.0747267201424 80.20439999999999L 879.0747267201424 32.08175999999999L 890.616189215374 32.08175999999999L 890.616189215374 32.08175999999999L 890.616189215374 80.20439999999999L 890.616189215374 80.20439999999999z"
                                                              fill="rgba(52,195,143,1)" fill-opacity="1"
                                                              stroke-opacity="1" stroke-linecap="square"
                                                              stroke-width="0" stroke-dasharray="0"
                                                              class="apexcharts-bar-area" index="2"
                                                              clip-path="url(#gridRectMaskixzmxiat)"
                                                              pathTo="M 879.0747267201424 80.20439999999999L 879.0747267201424 32.08175999999999L 890.616189215374 32.08175999999999L 890.616189215374 32.08175999999999L 890.616189215374 80.20439999999999L 890.616189215374 80.20439999999999z"
                                                              pathFrom="M 879.0747267201424 80.20439999999999L 879.0747267201424 80.20439999999999L 890.616189215374 80.20439999999999L 890.616189215374 80.20439999999999L 890.616189215374 80.20439999999999L 879.0747267201424 80.20439999999999"
                                                              cy="32.08175999999999" cx="956.0178100216866" j="11"
                                                              val="18" barHeight="48.122640000000004"
                                                              barWidth="11.541462495231626"></path>
                                                    </g>
                                                    <g id="SvgjsG1219" class="apexcharts-datalabels"
                                                       data:realIndex="0"></g>
                                                    <g id="SvgjsG1233" class="apexcharts-datalabels"
                                                       data:realIndex="1"></g>
                                                    <g id="SvgjsG1247" class="apexcharts-datalabels"
                                                       data:realIndex="2"></g>
                                                </g>
                                                <line id="SvgjsLine1337" x1="0" y1="0" x2="923.3169996185302" y2="0"
                                                      stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1"
                                                      class="apexcharts-ycrosshairs"></line>
                                                <line id="SvgjsLine1338" x1="0" y1="0" x2="923.3169996185302" y2="0"
                                                      stroke-dasharray="0" stroke-width="0"
                                                      class="apexcharts-ycrosshairs-hidden"></line>
                                                <g id="SvgjsG1339" class="apexcharts-yaxis-annotations"></g>
                                                <g id="SvgjsG1340" class="apexcharts-xaxis-annotations"></g>
                                                <g id="SvgjsG1341" class="apexcharts-point-annotations"></g>
                                            </g>
                                            <g id="SvgjsG1299" class="apexcharts-yaxis" rel="0"
                                               transform="translate(15.350000381469727, 0)">
                                                <g id="SvgjsG1300" class="apexcharts-yaxis-texts-g">
                                                    <text id="SvgjsText1301" font-family="Helvetica, Arial, sans-serif"
                                                          x="20" y="31.5" text-anchor="end" dominant-baseline="auto"
                                                          font-size="11px" font-weight="400" fill="#373d3f"
                                                          class="apexcharts-text apexcharts-yaxis-label "
                                                          style="font-family: Helvetica, Arial, sans-serif;">
                                                        <tspan id="SvgjsTspan1302">100</tspan>
                                                    </text>
                                                    <text id="SvgjsText1303" font-family="Helvetica, Arial, sans-serif"
                                                          x="20" y="84.9696" text-anchor="end" dominant-baseline="auto"
                                                          font-size="11px" font-weight="400" fill="#373d3f"
                                                          class="apexcharts-text apexcharts-yaxis-label "
                                                          style="font-family: Helvetica, Arial, sans-serif;">
                                                        <tspan id="SvgjsTspan1304">80</tspan>
                                                    </text>
                                                    <text id="SvgjsText1305" font-family="Helvetica, Arial, sans-serif"
                                                          x="20" y="138.4392" text-anchor="end" dominant-baseline="auto"
                                                          font-size="11px" font-weight="400" fill="#373d3f"
                                                          class="apexcharts-text apexcharts-yaxis-label "
                                                          style="font-family: Helvetica, Arial, sans-serif;">
                                                        <tspan id="SvgjsTspan1306">60</tspan>
                                                    </text>
                                                    <text id="SvgjsText1307" font-family="Helvetica, Arial, sans-serif"
                                                          x="20" y="191.90879999999999" text-anchor="end"
                                                          dominant-baseline="auto" font-size="11px" font-weight="400"
                                                          fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label "
                                                          style="font-family: Helvetica, Arial, sans-serif;">
                                                        <tspan id="SvgjsTspan1308">40</tspan>
                                                    </text>
                                                    <text id="SvgjsText1309" font-family="Helvetica, Arial, sans-serif"
                                                          x="20" y="245.3784" text-anchor="end" dominant-baseline="auto"
                                                          font-size="11px" font-weight="400" fill="#373d3f"
                                                          class="apexcharts-text apexcharts-yaxis-label "
                                                          style="font-family: Helvetica, Arial, sans-serif;">
                                                        <tspan id="SvgjsTspan1310">20</tspan>
                                                    </text>
                                                    <text id="SvgjsText1311" font-family="Helvetica, Arial, sans-serif"
                                                          x="20" y="298.848" text-anchor="end" dominant-baseline="auto"
                                                          font-size="11px" font-weight="400" fill="#373d3f"
                                                          class="apexcharts-text apexcharts-yaxis-label "
                                                          style="font-family: Helvetica, Arial, sans-serif;">
                                                        <tspan id="SvgjsTspan1312">0</tspan>
                                                    </text>
                                                </g>
                                            </g>
                                            <g id="SvgjsG1207" class="apexcharts-annotations"></g>
                                        </svg>
                                        <div class="apexcharts-tooltip apexcharts-theme-light"
                                             style="left: 160.199px; top: 115px;">
                                            <div class="apexcharts-tooltip-title"
                                                 style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">Feb
                                            </div>
                                            <div class="apexcharts-tooltip-series-group apexcharts-active"
                                                 style="order: 1; display: flex;"><span
                                                    class="apexcharts-tooltip-marker"
                                                    style="background-color: rgb(85, 110, 230);"></span>
                                                <div class="apexcharts-tooltip-text"
                                                     style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                    <div class="apexcharts-tooltip-y-group"><span
                                                            class="apexcharts-tooltip-text-label">Series A: </span><span
                                                            class="apexcharts-tooltip-text-value">55</span></div>
                                                    <div class="apexcharts-tooltip-z-group"><span
                                                            class="apexcharts-tooltip-text-z-label"></span><span
                                                            class="apexcharts-tooltip-text-z-value"></span></div>
                                                </div>
                                            </div>
                                            <div class="apexcharts-tooltip-series-group"
                                                 style="order: 2; display: none;"><span
                                                    class="apexcharts-tooltip-marker"
                                                    style="background-color: rgb(85, 110, 230);"></span>
                                                <div class="apexcharts-tooltip-text"
                                                     style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                    <div class="apexcharts-tooltip-y-group"><span
                                                            class="apexcharts-tooltip-text-label">Series A: </span><span
                                                            class="apexcharts-tooltip-text-value">55</span></div>
                                                    <div class="apexcharts-tooltip-z-group"><span
                                                            class="apexcharts-tooltip-text-z-label"></span><span
                                                            class="apexcharts-tooltip-text-z-value"></span></div>
                                                </div>
                                            </div>
                                            <div class="apexcharts-tooltip-series-group"
                                                 style="order: 3; display: none;"><span
                                                    class="apexcharts-tooltip-marker"
                                                    style="background-color: rgb(85, 110, 230);"></span>
                                                <div class="apexcharts-tooltip-text"
                                                     style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                    <div class="apexcharts-tooltip-y-group"><span
                                                            class="apexcharts-tooltip-text-label">Series A: </span><span
                                                            class="apexcharts-tooltip-text-value">55</span></div>
                                                    <div class="apexcharts-tooltip-z-group"><span
                                                            class="apexcharts-tooltip-text-z-label"></span><span
                                                            class="apexcharts-tooltip-text-z-value"></span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                            <div class="apexcharts-yaxistooltip-text"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="resize-triggers">
                                    <div class="expand-trigger">
                                        <div style="width: 1020px; height: 462px;"></div>
                                    </div>
                                    <div class="contract-trigger"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-4 card-title">Social Source</div>
                                <div class="text-center mb-4">
                                    <div class="avatar-sm mx-auto mb-4"><span
                                            class="avatar-title rounded-circle bg-soft-primary font-size-18"><i
                                                class="mdi mdi-facebook text-primary"></i></span></div>
                                    <p class="font-16 text-muted mb-2"></p><h5><a class="text-dark" href="/dashboard">Facebook
                                            - <span class="text-muted font-16">125 sales</span> </a></h5>
                                    <p class="text-muted">Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                                        ut libero venenatis faucibus tincidunt.</p><a class="text-primary font-16"
                                                                                      href="/dashboard">Learn more <i
                                            class="mdi mdi-chevron-right"></i></a></div>
                                <div class="mb-1 row">
                                    <div class="col-4">
                                        <div class="social-source text-center mt-3">
                                            <div class="avatar-xs mx-auto mb-3"><span
                                                    class="avatar-title rounded-circle bg-primary font-size-16"><i
                                                        class="mdi mdi-facebook text-white"></i></span></div>
                                            <h5 class="font-size-15">Facebook</h5>
                                            <p class="text-muted mb-0">125 sales</p></div>
                                    </div>
                                    <div class="col-4">
                                        <div class="social-source text-center mt-3">
                                            <div class="avatar-xs mx-auto mb-3"><span
                                                    class="avatar-title rounded-circle bg-info font-size-16"><i
                                                        class="mdi mdi-twitter text-white"></i></span></div>
                                            <h5 class="font-size-15">Twitter</h5>
                                            <p class="text-muted mb-0">112 sales</p></div>
                                    </div>
                                    <div class="col-4">
                                        <div class="social-source text-center mt-3">
                                            <div class="avatar-xs mx-auto mb-3"><span
                                                    class="avatar-title rounded-circle bg-pink font-size-16"><i
                                                        class="mdi mdi-instagram text-white"></i></span></div>
                                            <h5 class="font-size-15">Instagram</h5>
                                            <p class="text-muted mb-0">104 sales</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-5 card-title">Activity</div>
                                <ul class="verti-timeline list-unstyled">
                                    <li class="event-list">
                                        <div class="event-timeline-dot"><i
                                                class="bx bx-right-arrow-circle font-size-18"></i></div>
                                        <div class="media">
                                            <div class="mr-3"><h5 class="font-size-14">22 Nov <i
                                                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"></i>
                                                </h5></div>
                                            <div class="media-body">
                                                <div>Responded to need “Volunteer Activities</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="event-list">
                                        <div class="event-timeline-dot"><i
                                                class="bx bx-right-arrow-circle font-size-18"></i></div>
                                        <div class="media">
                                            <div class="mr-3"><h5 class="font-size-14">17 Nov <i
                                                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"></i>
                                                </h5></div>
                                            <div class="media-body">
                                                <div id="activitytext">Everyone realizes why a new common language would
                                                    be desirable...<a href="/dashboard">Read More</a></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="event-list active">
                                        <div class="event-timeline-dot"><i
                                                class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i></div>
                                        <div class="media">
                                            <div class="mr-3"><h5 class="font-size-14">15 Nov <i
                                                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"></i>
                                                </h5></div>
                                            <div class="media-body">
                                                <div>Joined the group “Boardsmanship Forum”</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="event-list">
                                        <div class="event-timeline-dot"><i
                                                class="bx bx-right-arrow-circle font-size-18"></i></div>
                                        <div class="media">
                                            <div class="mr-3"><h5 class="font-size-14">12 Nov <i
                                                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ml-2"></i>
                                                </h5></div>
                                            <div class="media-body">
                                                <div>Responded to need “In-Kind Opportunity”</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="text-center mt-4"><a class="btn btn-primary waves-effect waves-light btn-sm"
                                                                 href="/">View More <i
                                            class="mdi mdi-arrow-right ml-1"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-4 card-title">Top Cities Selling Product</div>
                                <div class="text-center">
                                    <div class="mb-4"><i class="bx bx-map-pin text-primary display-4"></i></div>
                                    <h3>1,456</h3>
                                    <p>San Francisco</p></div>
                                <div class="table-responsive mt-4">
                                    <table class="table table-centered table-nowrap mb-2">
                                        <tbody>
                                        <tr>
                                            <td style="width: 30%;"><p class="mb-0">San Francisco</p></td>
                                            <td style="width: 25%;"><h5 class="mb-0">1,456</h5></td>
                                            <td>
                                                <div class="bg-transparent progress">
                                                    <div class="progress-bar bg-primary" style="width: 94%;"
                                                         role="progressbar" aria-valuenow="94" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><p class="mb-0">Los Angeles</p></td>
                                            <td><h5 class="mb-0">1,123</h5></td>
                                            <td>
                                                <div class="bg-transparent progress">
                                                    <div class="progress-bar bg-success" style="width: 82%;"
                                                         role="progressbar" aria-valuenow="82" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><p class="mb-0">San Diego</p></td>
                                            <td><h5 class="mb-0">1,026</h5></td>
                                            <td>
                                                <div class="bg-transparent progress">
                                                    <div class="progress-bar bg-warning" style="width: 70%;"
                                                         role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                                         aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="mb-4 card-title">Latest Transaction</div>
                                <div class="table-responsive">
                                    <table class="table table-centered table-nowrap mb-0">
                                        <thead class="thead-light">
                                        <tr>
                                            <th style="width: 20px;">
                                                <div class="custom-control custom-checkbox"><input type="checkbox"
                                                                                                   class="custom-control-input"
                                                                                                   id="customCheck1"><label
                                                        class="custom-control-label" for="customCheck1">&nbsp;</label>
                                                </div>
                                            </th>
                                            <th>Order ID</th>
                                            <th>Billing Name</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Payment Status</th>
                                            <th>Payment Method</th>
                                            <th>View Details</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox"><input type="checkbox"
                                                                                                   class="custom-control-input"
                                                                                                   id="customCheck2"><label
                                                        class="custom-control-label" for="customCheck2">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a class="text-body font-weight-bold" href="/dashboard"> #SK2540 </a>
                                            </td>
                                            <td>Neal Matthews</td>
                                            <td>07 Oct, 2019</td>
                                            <td>$400</td>
                                            <td><span
                                                    class="font-size-12 badge-soft-success badge badge-success badge-pill">Paid</span>
                                            </td>
                                            <td><i class="fab fa-cc-mastercard mr-1"></i> Mastercard</td>
                                            <td>
                                                <button type="button"
                                                        class="btn-rounded waves-effect waves-light btn btn-primary btn-sm">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox"><input type="checkbox"
                                                                                                   class="custom-control-input"
                                                                                                   id="customCheck3"><label
                                                        class="custom-control-label" for="customCheck3">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a class="text-body font-weight-bold" href="/dashboard"> #SK2541 </a>
                                            </td>
                                            <td>Jamal Burnett</td>
                                            <td>07 Oct, 2019</td>
                                            <td>$380</td>
                                            <td><span
                                                    class="font-size-12 badge-soft-danger badge badge-danger badge-pill">Chargeback</span>
                                            </td>
                                            <td><i class="fab fa-cc-visa mr-1"></i> Visa</td>
                                            <td>
                                                <button type="button"
                                                        class="btn-rounded waves-effect waves-light btn btn-primary btn-sm">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox"><input type="checkbox"
                                                                                                   class="custom-control-input"
                                                                                                   id="customCheck4"><label
                                                        class="custom-control-label" for="customCheck4">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a class="text-body font-weight-bold" href="/dashboard"> #SK2542 </a>
                                            </td>
                                            <td>Juan Mitchell</td>
                                            <td>06 Oct, 2019</td>
                                            <td>$384</td>
                                            <td><span
                                                    class="font-size-12 badge-soft-success badge badge-success badge-pill">Paid</span>
                                            </td>
                                            <td><i class="fab fa-cc-paypal mr-1"></i> Paypal</td>
                                            <td>
                                                <button type="button"
                                                        class="btn-rounded waves-effect waves-light btn btn-primary btn-sm">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox"><input type="checkbox"
                                                                                                   class="custom-control-input"
                                                                                                   id="customCheck5"><label
                                                        class="custom-control-label" for="customCheck5">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a class="text-body font-weight-bold" href="/dashboard"> #SK2543 </a>
                                            </td>
                                            <td>Barry Dick</td>
                                            <td>05 Oct, 2019</td>
                                            <td>$412</td>
                                            <td><span
                                                    class="font-size-12 badge-soft-success badge badge-success badge-pill">Paid</span>
                                            </td>
                                            <td><i class="fab fa-cc-mastercard mr-1"></i> Mastercard</td>
                                            <td>
                                                <button type="button"
                                                        class="btn-rounded waves-effect waves-light btn btn-primary btn-sm">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox"><input type="checkbox"
                                                                                                   class="custom-control-input"
                                                                                                   id="customCheck6"><label
                                                        class="custom-control-label" for="customCheck6">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a class="text-body font-weight-bold" href="/dashboard"> #SK2544 </a>
                                            </td>
                                            <td>Ronald Taylor</td>
                                            <td>04 Oct, 2019</td>
                                            <td>$404</td>
                                            <td><span
                                                    class="font-size-12 badge-soft-warning badge badge-warning badge-pill">Refund</span>
                                            </td>
                                            <td><i class="fab fa-cc-visa mr-1"></i> Visa</td>
                                            <td>
                                                <button type="button"
                                                        class="btn-rounded waves-effect waves-light btn btn-primary btn-sm">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox"><input type="checkbox"
                                                                                                   class="custom-control-input"
                                                                                                   id="customCheck7"><label
                                                        class="custom-control-label" for="customCheck7">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td><a class="text-body font-weight-bold" href="/dashboard"> #SK2545 </a>
                                            </td>
                                            <td>Jacob Hunter</td>
                                            <td>04 Oct, 2019</td>
                                            <td>$392</td>
                                            <td><span
                                                    class="font-size-12 badge-soft-success badge badge-success badge-pill">Paid</span>
                                            </td>
                                            <td><i class="fab fa-cc-paypal mr-1"></i> Paypal</td>
                                            <td>
                                                <button type="button"
                                                        class="btn-rounded waves-effect waves-light btn btn-primary btn-sm">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">2021 © Skote.</div>
                <div class="col-sm-6">
                    <div class="text-sm-right d-none d-sm-block">Design &amp; Develop by Themesbrand</div>


                </div>
            </div>
        </div>
    </footer>
@endsection
