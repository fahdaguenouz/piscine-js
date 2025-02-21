function blockChain(data ,prev = { index: 0, hash: "0" }){
    let obj = {}
    obj.data=data
   
        obj.prev=prev
        obj.index=obj.prev.index+1
        const code = obj.index.toString()+obj.prev.hash+JSON.stringify(data)
        obj.hash=hashCode(code)
        //obj.s=obj.prev.hash
        //obj.ll=code

        obj.chain=function chain(c){
            return blockChain(c,obj)
        }
   
    return obj
}


const hashCode = str =>
    (
      [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
    ).toString(36)

    const hs =blockChain({a:1})
 
    console.log(hs);
    
    const v=hs.chain({ hello: 'world' })
    console.log(v);
    
   
 //console.log();
 //console.log(hs);
// const { chain, ...block } = blockChain({ a: 1 })
// console.log(block);



