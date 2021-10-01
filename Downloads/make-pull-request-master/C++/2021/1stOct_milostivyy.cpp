#include<bits/stdc++.h>
using namespace std;
#define int long long 
bool isprime(int n)
{
    if (n <= 1)
        return false;
    for (int i = 2; i <= sqrt(n); i++)
        if (n % i == 0)
            return false;
 
    return true;
}
signed main(){
#ifndef ONLINE_JUDGE
freopen("input.txt", "r", stdin);
freopen("output.txt", "w", stdout);
#endif
int t;
cin>>t;
while(t--)
{int n;
cin>>n;
int fib[n];
fib[0]=1;
fib[1]=1;
if(n==0)
{
    cout<<1<<endl;
}
else if(n==1)
{
    cout<<1<<endl;
}
else{
for(int i=2;i<n;i++)
{
    fib[i]=fib[i-1]+fib[i-2];
    
}

for(int i=0;i<n;i++)
{   if(isprime(fib[i]) || fib[i]%5==0)
    {
        fib[i]=0;
    }
    cout<<fib[i]<<" ";
}
cout<<endl;
}
}
}
