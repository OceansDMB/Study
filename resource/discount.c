// 거래처명 송림지류
// 송림지류의 고시가 적용을 'find매출고시가적용' 함수를 통해 도가 적용인지 실가 적용인지를 확인
const 거래처 = 송림지류
const 매출_고시가_적용 = find매출고시가적용(송림지류)


// condition 배열에 조건 입력
for : each condition cells	    // condition 입력란에 대하여
	input condition[i]			// 각 condition 배열 인덱스에 조건값을 입력

if : condition						                // 할당된 condition 배열이 고시가를 조회할 수 있는 조건이며
	if : 매출_고시가_적용				                // 도가를 적용할 경우, 도가를 조회 후 할당 + 도가 칼럼에 출력
		const 고시가 = find고시가_도가(condition)        
        print(고시가)
	else if : !매출_고시가_적용                         // 실가를 적용할 경우, 실가를 조회 후 할당 + 실가 칼럼에 출력
		const 고시가 = find고시가_실가(condition)
        print(고시가)


// discount 배열에 할인율 또는 단가를 입력
for : each discount cells           // discount 입력란에 대하여
    input discount[j]               // 각 discount 배열 인덱스에 할인율 또는 단가를 입력
    if : discount[j]                // 입력된 할인율이 있다면, 
        for : each discount cells   
            if : k == j
                continue
            ReadOnly discount[k]    // j 인덱스를 제외한 나머지(k) 입력란들은 ReadOnly 처리하고
        break                       // 반목문 탈출


// 입력된 할인율 또는 단가에 대하여, 계산 또는 역산 가능한 할인율 또는 단가가 있는지 확인
// 할인율 
if : 할인율_역산(discount[j], 매출_고시가_적용, 고시가)  
    input discount[l]                          // 할인율 역산이 가능하다면, 할인율 역산 후 배열에 할당

// kg 단가
if : kg단가_계산(discount[j], 매출_고시가_적용, 고시가) 
    input discount[l]                          // kg단가 계산이 가능하다면, kg단가 계산 후 배열에 할당

// R 단가
if : R단가_계산(discount[j], 매출_고시가_적용, 고시가) 
    input discount[l]                          // R단가 계산이 가능하다면, R단가 계산 후 배열에 할당

// BOX 단가
if : BOX단가_계산(discount[j], 매출_고시가_적용, 고시가) 
    input discount[l]                          // BOX단가 계산이 가능하다면, BOX단가 계산 후 배열에 할당


