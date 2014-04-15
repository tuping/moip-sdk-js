var DEFAULT_CREDIT_CARD = '4551870000000183';
var DEFAULT_CVV = '123';
var DEFAULT_PUBLIC_KEY = '-----BEGIN PUBLIC KEY-----' +
'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsXkulsKdAQLMH/zjzTLf' +
'0lrbgulfb6ZShEtRpmDnyX93EQqPdez7LyptvQBeTC+0pN57rNcWen9ApdsIMsNr' +
'YHjNQf/kI4Ka7Xnlx0U/v7bW1D8teDoD5glBTXLjU8hRi7qlOpupiPx4ldSnK9Jj' +
'tYApWuZMiCpWh/YRAlNW/N+ffm7ulq6H2atmgd+OFB2SghpbRJkqJiLaNJW8UkaR' +
'oXLHkF5WJD/RPrCxsZztYJQThxLX5gBgZ12YG5+7G26Ad/mWkPqF0GLSkd1gcnbP' +
'vF9Nw3ckKaIvh4Q4Vp3XI1hLvX41lg9CBxPPHkiJwM1M1coF9xsMP7kpJ2eujMBd' +
'mwIDAQAB' +
'-----END PUBLIC KEY-----';

function defaultForm() {

  var form =
      '<form method="post" action="#" id="test-form">' +
      '<input type="hidden" name="payment-method" data-input="fundingInstrument[method]" value="CREDIT_CARD"/>' +
      '<input type="text" name="installment-count" data-input="installmentCount" value="2"/>' +
      '<input type="text" name="card-number" data-encrypted-input="fundingInstrument[creditCard][number]" value="' + DEFAULT_CREDIT_CARD + '"/>' +
      '<input type="text" name="cvv-number" data-encrypted-input="fundingInstrument[creditCard][cvc]" value="' + DEFAULT_CVV + '"/>' +
      '<input type="text" name="expiration-date-month" data-input="fundingInstrument[creditCard][expirationMonth]" value="10"/>' +
      '<input type="text" name="expiration-date-year" data-input="fundingInstrument[creditCard][expirationYear]" value="2020"/>' +
      '<input type="text" name="holder-full-name" data-input="fundingInstrument[creditCard][holder][fullName]" value="Jose Portador da Silva"/>' +
      '<input type="text" name="holder-birthdate" data-input="fundingInstrument[creditCard][holder][birthDate]" value="1988-12-30"/>' +
      '<input type="text" name="tax-document-type" data-input="fundingInstrument[creditCard][holder][taxDocument][type]" value="CPF"/>' +
      '<input type="text" name="tax-document-number" data-input="fundingInstrument[creditCard][holder][taxDocument][number]" value="055443444320"/>' +
      '<input type="text" name="phone-coutry-code" data-input="fundingInstrument[creditCard][holder][phone][countryCode]" value="55"/>' +
      '<input type="text" name="phone-area-code" data-input="fundingInstrument[creditCard][holder][phone][areaCode]" value="11"/>' +
      '<input type="text" name="phone-number" data-input="fundingInstrument[creditCard][holder][phone][number]" value="66778899"/>' +
      '<input type="submit" name="submit-button" value="Click"/>' +
      '</form>';

  return form;
}

function encryptedForm() {

  var form = defaultForm();

  var encryptedInputs =
      '<input type="hidden" name="fundingInstrument[creditCard][number]" value="PROTECTED"/>' +
      '<input type="hidden" name="fundingInstrument[creditCard][cvc]" value="PROTECTED"/>';

  form = [form.slice(0, form.indexOf('</form>')), encryptedInputs, form.slice(form.indexOf('</form>'))].join('');

  return form;
}

function defaultPaymentResponse() {
 return '{"id":"PAY-EVSFR4SN0DO3","status":"CANCELLED","amount":{"fees":1185,"refunds":0,"liquid":9935,"currency":"BRL","total":11120},"installmentCount":2,"fundingInstrument":{"creditCard":{"brand":"VISA","first6":"407302","last4":"0002"},"method":"CREDIT_CARD"},"fees":[{"type":"TRANSACTION","amount":862},{"type":"PRE_PAYMENT","amount":323}],"events":[{"createdAt":"2014-04-03T15:51:11-0300","type":"PAYMENT.CANCELLED"},{"createdAt":"2014-04-03T15:51:09-0300","type":"PAYMENT.CREATED"}],"_links":{"order":{"title":"ORD-XOM711VZRHL6","href":"https://test.moip.com.br/v2/orders/ORD-XOM711VZRHL6"},"self":{"href":"https://test.moip.com.br/v2/payments/PAY-EVSFR4SN0DO3"}},"updatedAt":"2014-04-03T15:51:11-0300","createdAt":"2014-04-03T15:51:09-0300","blocks":[]}';
}