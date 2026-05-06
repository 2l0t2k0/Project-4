

function verifyPerms(requiredPerms) {
  return (req, res, next) => {
    const userPerms = req.user.perms || [];
    if (userPerms != 'Admin' && userPerms != 'SuperAdmin') {
      return res.status(403).json({ error: 'Forbidden: insufficient permissions' });
    }
    next();
  };
}

module.exports = verifyPerms;