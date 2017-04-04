function Hamming() {}

Hamming.prototype.compute = function(sequence1, sequence2) {
  if (sequence1.length !== sequence2.length) { throw 'DNA strands must be of equal length.'; }

  var distance = 0;
  for (var i = 0, len = sequence1.length; i < len; i++) {
    if (sequence1[i] !== sequence2[i]) { distance++; }
  }
  return distance;
};

module.exports = Hamming;
