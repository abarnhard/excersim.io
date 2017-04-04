function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function toRna(dnaStrand) {
  if (dnaStrand.match(/[^ACGT]/)) { throw 'Invalid input'; }

  var rnaStrand = '';

  for (var i = 0, len = dnaStrand.length; i < len; i++) {
    switch(dnaStrand[i]) {
      case 'G':
        rnaStrand += 'C';
        break;
      case 'C':
        rnaStrand += 'G';
        break;
      case 'T':
        rnaStrand += 'A';
        break;
      case 'A':
        rnaStrand += 'U';
        break;
    }
  }
  return rnaStrand;
};

module.exports = DnaTranscriber;
