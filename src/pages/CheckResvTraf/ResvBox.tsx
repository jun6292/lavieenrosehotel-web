import React, { useState } from "react";
import { S } from "./style";

type ResvData = {
  payment_date : string;
  start_date : string;
  end_date: string;
  start_end_location : string;
  total_price : string;
};

interface ResvProps {
    ResvData: ResvData;
  }

const ResvBox: React.FC<ResvProps> = ({ ResvData }) => {
  return (
    <>
        <S.ResvContainer>
          <S.ResvLeft>
            <S.ResvText>결제일 : {ResvData.payment_date}</S.ResvText>
            <S.ResvText>출발날짜 / 복귀날짜 : {ResvData.start_date} / {ResvData.end_date}</S.ResvText>
            <S.ResvText>교통편 : {ResvData.start_end_location} ↔ 호텔</S.ResvText>
            <S.ResvText>지불금액 : {ResvData.total_price}</S.ResvText>
          </S.ResvLeft>
            
          <S.CancelResv>
            <S.CancelResvIcon />
            <S.CancelResvText>예약취소</S.CancelResvText>
          </S.CancelResv>
          
        </S.ResvContainer>
    </>
  );
};

export default ResvBox;