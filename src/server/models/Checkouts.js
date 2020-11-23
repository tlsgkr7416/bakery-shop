
module.exports = function(sequlize, DataTypes){
    const Checkouts = sequlize.define('Checkouts',{
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        imp_uid : { type: DataTypes.STRING }, //고유ID
        merchant_uid : { type: DataTypes.STRING }, //상점 거래ID
        paid_amount : { type: DataTypes.INTEGER }, //결제금액
        buyer_name : { type: DataTypes.STRING }, //구매자 성함
        buyer_tel : { type: DataTypes.INTEGER }, //전화번호
        buyer_addr : { type: DataTypes.STRING }, //구매자 주소
        buyer_postcode : { type: DataTypes.STRING }, //우편번호
        status : { type: DataTypes.STRING }, //결재완료, 배송중 등등
        song_jang : { type: DataTypes.STRING }, //송장번호
    });

    return Checkouts
}
