

function verifyPerms(RequiredPerms) {
  return (req, res, next) => {
    const userPerms = req.user.perms;
    if (!RequiredPerms.includes(userPerms)) {
      return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
    }
    next();
  };
}

module.exports = verifyPerms;